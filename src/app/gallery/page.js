import EventTimeline from "../components/EventTimeline";

const GalleryPage = () => {

    const events = [
        {
          id: 1,
          title: 'Event 1',
          description: 'This is the description for Event 1.',
          date: 'January 1, 2023',
          image: '/images/slide-1.jpg', // Path to the image in the public folder
        },
        {
          id: 2,
          title: 'Event 2',
          description: 'This is the description for Event 2.',
          date: 'February 15, 2023',
          image: '/images/slide-2.jpg', // Path to the image in the public folder
        },
        {
          id: 3,
          title: 'Event 3',
          description: 'This is the description for Event 3.',
          date: 'March 30, 2023',
          image: '/images/slide-3.jpg', // Path to the image in the public folder
        },
        {
          id: 4,
          title: 'Event 4',
          description: 'This is the description for Event 4.',
          date: 'April 10, 2023',
          image: '/images/slide-1.jpg', // Path to the image in the public folder
        },
        {
          id: 5,
          title: 'Event 5',
          description: 'This is the description for Event 5.',
          date: 'May 20, 2023',
          image: '/images/slide-3.jpg', // Path to the image in the public folder
        },
        {
          id: 6,
          title: 'Event 6',
          description: 'This is the description for Event 6.',
          date: 'June 25, 2023',
          image: '/images/slide-2.jpg', // Path to the image in the public folder
        }
      ];

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1>Gallery</h1>
            <EventTimeline events={events} />
        </div>
    );
}

export default GalleryPage;