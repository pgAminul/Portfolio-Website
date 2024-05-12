import React, { useEffect } from 'react';
import { Formik, useFormik } from 'formik';
import '../Style/Contact/Contact.css';
import * as Yup from "yup";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
    const form = useRef();

    useEffect(() => {
        AOS.init();
      }, [])
    const validationSchema = Yup.object({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        message: Yup.string().min(2, "minimum 2 characters required").required()
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values, { resetForm }) => {
            resetForm({ values: '' });

            emailjs
            .sendForm('service_up0cc5c', 'template_8m0aens', form.current, {
              publicKey: '4kvW9pfL2e0y0N2Kn',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
            toast("Thanks! Message successfully sent.",{
                position:'bottom-left'
            })
            
        },
    });

    return (
        <div className='contactHeader' data-aos="fade-up"
        data-aos-duration="2000">
        <div className="ContainerHeaderChild">
        <h2 className='ContactTitle display-5'>Contact Me</h2>
            <div className="forForm">
                <form ref={form} onSubmit={formik.handleSubmit}>
                    {formik.touched.name && formik.errors.name && (
                        <span className='formError'>{formik.errors.name}</span>
                    )}
                    <input data-aos="flip-right"
                        type="text"
                        name="name"
                        placeholder="Write Your Name" // Added placeholder attribute
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <br />
                  {formik.touched.email && formik.errors.email && (
                        <span className='formError'>{formik.errors.email}</span>
                    )}
                    <input data-aos="flip-right"
                        type="email"
                        name="email"
                        placeholder="Write Your Email" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <br />
                    {formik.touched.message && formik.errors.message && (
                        <span className='formError'>{formik.errors.message}</span>
                    )}
                    <textarea data-aos="flip-right"
                        name="message"
                        placeholder="Your message here" 
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                   
                    <button data-aos="zoom-out" type="submit">Submit</button>
                </form>
                <div className="SocialMedia"data-aos="flip-right">
                <a href="https://www.facebook.com/freelancerAminul1/ " target="_blank" className='facebook'><FaFacebook className='icons'/></a>
                <a href="https://www.instagram.com/webbyaminul/" target="_blank" ><img src="./Images/instagram.png"className='instagram icons' alt="" /></a>
                <a href="https://www.linkedin.com/in/md-aminul-islam-showrov/" target="_blank" className='linkedin'><FaLinkedin className='icons'/></a>
                <a href="https://wa.me/60132194479" target="_blank" className='whatsapp'><FaSquareWhatsapp className='icons'/></a>
                <a href="https://t.me/Web_Expert_Aminul" target="_blank" className='telegram'><FaTelegram className='icons'/></a>
                <a href="https://twitter.com/aminul_islam_1" target="_blank" className='twitter'><FaXTwitter className='icons'/></a>
                </div>
            </div>
 <ToastContainer
  
/>
        </div>

        </div>
    );
}

export default Contact;
