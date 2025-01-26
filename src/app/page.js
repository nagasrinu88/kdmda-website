import Image from "next/image";
import Timeline from "./components/Timeline";
import YouTubeShowcase from "./components/YouTubeShowcase";

export const metadata = {
  title: "Home Page",
  description: "Welcome to our sacred temple. Experience the ancient wisdom and peaceful sanctuary of our sacred temple.",
};

export default function Home() {

  const videos = [
    {
      id: 'GRmAXKs1m7I',
      title: 'My First Video',
      description: 'A short description of the first video.',
    },
    {
      id: 'tD6CeO0I0tw3ELwOQ',
      title: 'Second Video',
      description: 'A brief description of the second video.',
    },
    // Add more video objects...
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-b from-black/60 to-transparent">
        <Image
          src="/images/IMG_20240417_081716.jpg" // You'll need to add this image to your public folder
          alt="Temple Hero Image"
          fill
          className="object-cover -z-1"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-orange-400 p-8 bg-black/60">
          <h1 className="text-3xl md:text-2xl font-bold text-center mb-4">
            Sri Kanakadurga Mahadevi Alayam.
          </h1>
          <p className="text-xl md:text-xl text-center max-w-xl text-orange-200">
            Experience the ancient wisdom and peaceful sanctuary of our sacred temple
          </p>
        </div>
      </div>

      <Timeline />

      <YouTubeShowcase videos={videos} />

      {/* Feature Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-16 bg-stone-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sacred History</h2>
          <p className="text-gray-600">Discover the rich heritage and spiritual significance of our ancient temple.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Meditation Space</h2>
          <p className="text-gray-600">Find inner peace in our dedicated meditation halls and peaceful gardens.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Daily Ceremonies</h2>
          <p className="text-gray-600">Join our daily rituals and spiritual ceremonies led by temple masters.</p>
        </div>
      </div>
      
    </div>
  );
}
