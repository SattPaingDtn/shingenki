import * as React from "react";

export const EmailTemplate = ({ name, email, phone, message }) => (
  <div>
    <h3>Dear {name} ,</h3>
    <p>
      I hope this email finds you well. I wanted to express my sincere gratitude
      for reaching out to us. We appreciate the opportunity to assist you with
      your request.
    </p>
    <p>
      Your communication is important to us, and we are committed to providing
      you with the best possible support and service. We have received your
      message, and I have noted your contact information as follows:
    </p>
    <div>Name:&nbsp;{name}</div>
    <div>Email:&nbsp;{email}</div>
    <div>Phone:&nbsp;{phone}</div>
    <div>Message:&nbsp;{message}</div>
    <p>
      We are working diligently to address your needs and will get back to you
      as soon as possible. If you have any additional information or questions,
      please feel free to share them. Your input is invaluable and helps us
      serve you better.
    </p>
    <p>
      Once again, thank you for choosing Shingenki. We look forward to serving
      you and meeting your expectations.
    </p>
    <div>Best regards,</div>
    <div>Shingenki</div>
  </div>
);
