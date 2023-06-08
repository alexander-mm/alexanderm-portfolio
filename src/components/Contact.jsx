import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ead28pe",
        "template_9yseh9r",
        {
          from_name: form.name,
          to_name: "Alexander Mena",
          from_email: form.email,
          to_email: "alexandermena@gmail.com",
          message: form.message,
        },
        "SRqPChrSb2BfuwycL"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={``}
    >
    
        <p className="">Get in touch</p>
        <h3 className="">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=''
        >
          <label className=''>
            <span className=''>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className=''
            />
          </label>
          <label className=''>
            <span className=''>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className=''
            />
          </label>
          <label className=''>
            <span className=''>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className=''
            />
          </label>

          <button
            type='submit'
            className=''
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>   
    </div>
  );
};

export default Contact;