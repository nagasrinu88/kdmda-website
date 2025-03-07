import EventTimeline from "../components/EventTimeline";
import Link from 'next/link';

const GalleryPage = () => {

  const events = [
    {
      id: 1,
      title: 'శ్రీ కనకదుర్గా ఆలయ విగ్రహ ప్రాణప్రతిష్ఠ మహోత్సవం',
      description: 'This is the description for Event 1.',
      date: 'April 21, 2024',
      image: '/images/slide-1.jpg',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'This is the description for Event 2.',
      date: 'February 15, 2023',
      image: '/images/slide-2.jpg',
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'This is the description for Event 3.',
      date: 'March 30, 2023',
      image: '/images/slide-3.jpg',
    },
    {
      id: 4,
      title: 'Event 4',
      description: 'This is the description for Event 4.',
      date: 'April 10, 2023',
      image: '/images/slide-1.jpg',
    },
    {
      id: 5,
      title: 'Event 5',
      description: 'This is the description for Event 5.',
      date: 'May 20, 2023',
      image: '/images/slide-3.jpg',
    },
    {
      id: 6,
      title: 'Event 6',
      description: 'This is the description for Event 6.',
      date: 'June 25, 2023',
      image: '/images/slide-2.jpg',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1>Temple Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map(event => (
          <div key={event.id} className="border p-4 rounded-lg shadow-lg">
            <Link href={`/gallery/${event.id}`}>
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-sm font-bold mt-2">{event.title}</h2>
                <p className="text-gray-600">{event.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;