import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () =>{
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .send(
            "web-port-service",
            "template_4pn20ib",
            form,
            "z-MT_AVRS-1NfONK4"
        )
        .then(
            (response) => {
                alert("✅ ส่งข้อความเรียบร้อย!")
                setForm({ name: "", email: "", message: "" }); // ล้างค่าในฟอร์ม
            },
            (error) => {
                alert("❌ ส่งไม่สำเร็จ โปรดลองใหม่");
            }
        );
    };

    return (
        <div>
            
        </div>
    )
}