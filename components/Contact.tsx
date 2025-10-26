import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Get In Touch
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Have a project in mind? I'd love to hear about it. Let's build something great together.
                </motion.p>

                <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-5">
                    {/* Contact Info Side */}
                    <motion.div 
                      className="col-span-2 bg-green-50 p-8"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                        <p className="text-gray-600 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>

                        <div className="space-y-6">
                            <motion.div 
                              className="flex items-start space-x-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              viewport={{ once: true, margin: "-100px" }}
                              whileHover={{ x: 5 }}
                            >
                                <PhoneIcon />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Phone</h4>
                                    <a href="tel:+254758070144" className="text-gray-600 hover:text-green-700 transition-colors">+254 758 070144</a>
                                </div>
                            </motion.div>
                             <motion.div 
                               className="flex items-start space-x-4"
                               initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ delay: 0.4 }}
                               viewport={{ once: true, margin: "-100px" }}
                               whileHover={{ x: 5 }}
                             >
                                <MailIcon />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Email</h4>
                                    <a href="mailto:info@sammybd.com" className="text-gray-600 hover:text-green-700 transition-colors">info@sammybd.com</a>
                                </div>
                            </motion.div>
                             <motion.div 
                               className="flex items-start space-x-4"
                               initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ delay: 0.5 }}
                               viewport={{ once: true, margin: "-100px" }}
                               whileHover={{ x: 5 }}
                             >
                                <LocationIcon />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Location</h4>
                                    <p className="text-gray-600">Nairobi, Kenya</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div 
                      className="col-span-3 p-8"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="John Doe" />
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="you@example.com" />
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Your message..."></textarea>
                            </motion.div>
                            <motion.button 
                              type="submit" 
                              className="w-full bg-green-700 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              viewport={{ once: true, margin: "-100px" }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;