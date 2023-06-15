use std::io::{Read, Write};
use std::net::TcpStream;
use wasm_bindgen::prelude::*;
// Import the `window.alert` function SEND_FROM the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

//ts側の使い方memo
//import init from '@/_lib/otegami/pkg'
//import * as wasm from '@/_lib/otegami/pkg'
#[derive(Debug)]
pub struct SmtpClient {
    server: String,
    port: u16,
    stream: Option<TcpStream>,
}

impl SmtpClient {
    pub fn new(server: &str, port: u16) -> Self {
        Self {
            server: server.to_string(),
            port,
            stream: None,
        }
    }

    pub fn connect(&mut self) -> Result<(), String> {
        let server_address = format!("{}:{}", self.server, self.port);
        match TcpStream::connect(server_address) {
            Ok(stream) => {
                self.stream = Some(stream);
                Ok(())
            }
            Err(err) => Err(err.to_string()),
        }
    }

    pub fn send_message(&mut self, subject: &str, body: &str) -> Result<(), String> {
        const SEND_FROM: &str = "4.togenkyo@gmail.com";
        const SEND_TO: &str = "4.togenkyo@gmail.com";
        self.read_response()?;

        self.send_command(format!("HELO {}\r\n", self.server))?;
        self.read_response()?;

        self.send_command(format!("MAIL FROM:<{}>\r\n", SEND_FROM))?;
        self.read_response()?;

        self.send_command(format!("RCPT TO:<{}>\r\n", SEND_TO))?;
        self.read_response()?;

        self.send_command("DATA\r\n".to_string())?;
        self.read_response()?;

        let mail_header = format!(
            "From: {}\r\nTo: {}\r\nSubject: {}\r\n\r\n",
            SEND_FROM, SEND_TO, subject
        );
        self.send_command(mail_header)?;

        self.send_command(body.to_string())?;

        self.send_command("\r\n.\r\n".to_string())?;
        self.read_response()?;

        self.send_command("QUIT\r\n".to_string())?;
        self.read_response()?;

        Ok(())
    }

    fn send_command(&mut self, command: String) -> Result<(), String> {
        match &mut self.stream {
            Some(stream) => match stream.write_all(command.as_bytes()) {
                Ok(_) => Ok(()),
                Err(err) => Err(err.to_string()),
            },
            None => Err("Not connected to the server.".to_string()),
        }
    }

    fn read_response(&mut self) -> Result<String, String> {
        let mut buffer = [0; 512];
        match &mut self.stream {
            Some(stream) => match stream.read_exact(&mut buffer) {
                Ok(_) => {
                    let response = String::from_utf8_lossy(&buffer).to_string();
                    Ok(response)
                }
                Err(err) => Err(err.to_string()),
            },
            None => Err("Not connected to the server.".to_string()),
        }
    }
}

#[wasm_bindgen]
pub fn send_email(subject: &str, body: &str) -> Result<(), JsValue> {
    const SMTP_SERVER: &str = "smtp.gmail.com";
    const SMTP_PORT: u16 = 587;

    let mut client = SmtpClient::new(SMTP_SERVER, SMTP_PORT);
    client.connect().map_err(|err| JsValue::from_str(&err))?;
    client
        .send_message(subject, body)
        .map_err(|err| JsValue::from_str(&err))?;

    Ok(())
}
