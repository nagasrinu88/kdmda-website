'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const ContactUsForm = () => {
    const onFormSubmit = (e) => {
        console.log('Form submitted');
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value
        };
        console.log(formData);
        alert("We have received your message. We will get back to you soon.");
        e.target.reset();
        e.preventDefault();
    };


    return (
        <div className=''>
            {/* Hero Section */}
            <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
                <Image
                    src="/images/contact-us2.jpg" // Add your hero image to the public folder
                    alt="Contact Us"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute text-center text-white"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg sm:text-xl">We would love to hear from you!</p>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Contact Form and Details Section */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                            <form action="#" method="POST" onSubmit={onFormSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold">Address</h3>
                                    <p className="mb-1">
                                        శ్రీ కనకదుర్గా మహాదేవి ఆలయం, మంచినీళ్ల చెరువు రోడ్, కోలమూరు గ్రామం, రాజముండ్రి - 533102.
                                    </p>
                                    <p>
                                        <b>ల్యాండ్ మార్క్:</b>
                                        కోలమూరు మునిసిపల్ స్కూల్ బ్యాక్ సైడ్ రోడ్, అడబాల సూర్యనారాయ గారి మఖం ప్రక్కన.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <p className="text-gray-600">+91 123 456 7890</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Email</h3>
                                    <p className="text-gray-600">info@stgeorgeschools.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="container mx-auto px-4 pb-12">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.3066780082827!2d81.8095239752364!3d17.057645312220494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a10bd80ee6af%3A0x5e46b672b5f48149!2sSri%20Kanaka%20Durga%20Maha%20Devi%20Alayam!5e0!3m2!1sen!2sin!4v1740071943824!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsForm;