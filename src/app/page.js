import Image from "next/image";
import Timeline from "./components/Timeline";
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-b from-black/60 to-transparent">
        <Image
          src="/images/IMG_20240417_081716.jpg" // You'll need to add this image to your public folder
          alt="Temple Hero Image"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
            Sri Kanakadurga Mahadevi Alayam.
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Experience the ancient wisdom and peaceful sanctuary of our sacred temple
          </p>
        </div>
      </div>

      <Timeline />

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
