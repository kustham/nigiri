use wasm_bindgen::prelude::*;

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
