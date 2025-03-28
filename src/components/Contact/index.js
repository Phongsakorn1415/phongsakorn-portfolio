import React, {useRef, useState} from "react";
import emailjs, { send } from "@emailjs/browser";
import { Element } from "react-scroll";
import './index.css'

const Contact = () =>{
    const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
    const FormRef = useRef();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'web-port-service',
            'template_4pn20ib',
            FormRef.current, 
            {
                publicKey: 'z-MT_AVRS-1NfONK4',
        })
        // .send(
        //     "web-port-service",
        //     "template_4pn20ib",
        //     FormRef.current,
        //     "z-MT_AVRS-1NfONK4"
        // )
        .then(
            (response) => {
                alert("✅ ส่งข้อความเรียบร้อย!")
                setForm({ name: "", email: "", title: "", message: "" }); // ล้างค่าในฟอร์ม
                window.location.reload(false)
            },
            (error) => {
                alert("❌ ส่งไม่สำเร็จ โปรดลองใหม่");
            }
        );
    };

    return (
        <Element name="Contact">
            <div className="container contact">
                <div className="contact-card rounded-top-4 p-5">
                    <span className="fs-1 fw-bolder">Contact</span>
                    <form className="mt-3 text-start" ref={FormRef} onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label fs-5" for="name">Name - SurName</label>
                                <input type="text" className="form-control" placeholder="Name" id="name" name="name" required/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label fs-5" for="email">Email</label>
                                <input type="email" className="form-control" placeholder="Email" id="email" name="email" required/>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fs-5" for="title">Title</label>
                            <input type="text" className="form-control" placeholder="Title" id="title" name="title"/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fs-5" for="content">Message</label>
                            <textarea className="form-control" rows={5} name="message" id="content"></textarea>
                        </div>
                        <div className="d-flex justify-content-end mt-3">
                            <input type="submit" className="btn btn-secondary btn-lg" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </Element>
    )
}

export default Contact