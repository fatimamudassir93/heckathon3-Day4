"use client";
import React, { useState, FormEvent } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Contact = () => {
  const [btnHover, setBtnHover] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBtnClick(true);
    setResult("Sending...");

    setTimeout(() => {
      setBtnClick(false);
    }, 500);

    const formData = new FormData(event.target as HTMLFormElement);

    // Use your Web3Forms Access Key here
    formData.append("access_key", "218de58b-9b19-41ec-b356-824d07903ff4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Submission failed. Please try again.");
      }
    } catch (error) {
      setResult("There was an error submitting the form.");
      if (process.env.NODE_ENV === "development") {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="bg-[#FCF8F3]">
      {/* Hero Section */}
      <div className="bg-[url('/contact.png.png')] bg-cover bg-center h-60 flex items-center justify-center">
      </div>

      {/* Contact Form Section */}
      <section className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Address Details */}
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-6">
              For more information about our products or services, feel free to
              drop us an email or give us a call. We're here to help!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#B88E2F] text-xl" />
                <span>
                  <strong>Address:</strong> 236 5th St Ave, New York, NY
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#B88E2F] text-xl" />
                <span>
                  <strong>Phone:</strong> (+84) 546-8798
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaClock className="text-[#B88E2F] text-xl" />
                <span>
                  <strong>Working Hours:</strong> Mon-Fri 9am - 5pm
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 p-6 bg-white border rounded-md shadow-md">
            <form onSubmit={submitHandler} className="space-y-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border p-2 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full border p-2 rounded-md"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border p-2 rounded-md"
              />
              <textarea
                name="message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Message"
                rows={5}
                className="w-full border p-2 rounded-md"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#B88E2F] text-white w-full p-2 rounded-md flex items-center justify-center gap-2"
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                <h3>Send</h3>
                <MdSend
                  className={`h-5 w-5 ${btnHover && "scale-125 duration-100"} ${btnClick && "translate-x-20 opacity-0 duration-300"}`}
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="text-center pt-10 text-gray-600">
        <p>{result}</p>
      </div>

<img src="nero.png.png" alt="pic"  width={2000}
          height={700}>
</img>
      {/* Footer Section */}
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2023 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
