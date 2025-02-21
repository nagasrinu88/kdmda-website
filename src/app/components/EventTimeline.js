'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const EventTimeline = ({ events }) => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

                {/* Timeline Entries */}
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} // Ensures animation happens only once
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="relative mb-8 flex flex-col md:flex-row items-center"
                    >
                        {/* Image Container */}
                        <div
                            className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                                }`}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="overflow-hidden rounded-lg shadow-lg"
                            >
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        </div>

                        {/* Text Container */}
                        <div
                            className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                                }`}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-600">{event.description}</p>
                                <p className="text-sm text-gray-500 mt-2">{event.date}</p>
                            </motion.div>
                        </div>

                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EventTimeline;