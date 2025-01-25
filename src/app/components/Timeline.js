'use client';

import { Card, CardHeader, CardBody, CardFooter } from '@heroui/react';
import Image from 'next/image';

const Timeline = () => {
  const timelineItems = [
    {
      time: '6:00 AM',
      frequency: 'Daily',
      title: 'Morning Puja',
      image: '/images/morning-puja.jpg',
      description: 'Start your day with the divine morning ritual. The temple priests perform the sacred abhishekam ceremony, offering prayers and blessings for all devotees.',
    },
    {
      time: '12:00 PM',
      frequency: 'Daily',
      title: 'Noon Puja',
      image: '/images/noon-aarti.jpg',
      description: 'Join us for the midday prayers and receive blessings. This ceremony includes special offerings and spiritual discourses.',
    },
    {
      time: '6:00 PM',
      frequency: 'Daily',
      title: 'Evening Puja',
      image : '/images/evening-puja.jpg',
      description: 'End your day with the serene evening aarti. Experience the peaceful atmosphere as we close the day with traditional prayers and bhajans.',
    },
    // Add more timeline items as needed
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Temple Timeline</h2>
      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <Card key={index} className="flex flex-col md:flex-row gap-8">
            <CardHeader className="md:w-1/3">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
            </CardHeader>
            <CardBody className="md:w-2/3">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <time className="font-semibold">{item.time}</time>
                <span className="text-sm">{item.frequency}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Timeline;