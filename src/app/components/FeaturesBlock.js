'use client';

import React, { useState, useEffect, use, useRef } from 'react';
import { motion,useInView } from 'framer-motion';

const FeaturesBlock = () => {

    const fatures = [
        {
            title: 'Sacred History',
            description: 'Discover the rich heritage and spiritual significance of our ancient temple.'
        },
        {
            title: 'Meditation Space',
            description: 'Find inner peace in our dedicated meditation halls and peaceful gardens.'
        },
        {
            title: 'Daily Ceremonies',
            description: 'Join our daily rituals and spiritual ceremonies led by temple masters.'
        }
    ];

    const refs = [];
    const isInViews = [];

    refs[0] = useRef(null);
    refs[1] = useRef(null);
    refs[2] = useRef(null);

    isInViews[0] = useInView(refs[0], { once: true });
    isInViews[1] = useInView(refs[1], { once: true });
    isInViews[2] = useInView(refs[2], { once: true });

    const sectionVariants = {
        hidden: { opacity: 0, scale: .5 },
        visible: { opacity: 1, scale: 1 },
      };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-16 bg-stone-100">
            {fatures.map((feature, index) => (
                <motion.div
                    ref={refs[index]}
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg"
                    initial="hidden"
                    animate={isInViews[index] ? 'visible' : 'hidden'}
                    variants={sectionVariants}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-gray-600">{feature.description}</p>
                </motion.div>
            ))}
        </div>
    );
}

export default FeaturesBlock;