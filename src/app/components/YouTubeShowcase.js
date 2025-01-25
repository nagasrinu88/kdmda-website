'use client';

import { Card, CardHeader, CardFooter, CardBody, Image } from "@heroui/react";
import { Button } from '@heroui/react';

const YouTubeShowcase = ({ videos }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Temple YouTube Videos</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {videos.map((video, index) => (
          <Card key={index} isPressable shadow="sm">
            <CardBody className="overflow-visible p-0">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
                className="w-full h-full"
              ></iframe>
            </CardBody>
            <CardFooter className="text-small justify-end">
              {/* <b>{video.id}</b> */}
              <Button as="a" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default YouTubeShowcase;