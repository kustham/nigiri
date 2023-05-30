use base64::{engine::general_purpose, Engine};
use dotenv;
use wasm_bindgen::prelude::*;
pub type Error = Box<dyn std::error::Error + Send + Sync>;
pub type Result<T> = std::result::Result<T, Error>;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn error(s: &str);
    #[wasm_bindgen]
    fn send_mail(to: &str, subject: &str, body: &str);
}

#[wasm_bindgen]
pub fn send_email(to: &str, subject: &str, body: &str) {
    let message = String::from("Email sent successfully!{}") + to + subject + body;
    log(&message);
}

fn mime_encode(txt: &str) -> String {
    format!("=?UTF-8?B?{}?=", general_purpose::STANDARD.encode(txt))
}

