'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Contact */}
      <div className="container-fluid contact">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p>
                  Resolved to in believed desirous weddings together enjoyed cousins herself<br />
                  arizonaarchitects@hollers.com
                  <br /><br />
                  Explain few led parties attacks company<br />
                  On sure fine kept walk am in it.
                  <br /><br />
                  Smiling nothing affixed he carried.<br />
                  arizonaarchitects@hollers.com
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <p>
                  Resolved to in believed desirous weddings together enjoyed cousins herself<br />
                  arizonaarchitects@hollers.com
                  <br /><br />
                  Explain few led parties attacks company<br />
                  On sure fine kept walk am in it.
                  <br /><br />
                  Smiling nothing affixed he carried.<br />
                  arizonaarchitects@hollers.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container contact-form">
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

