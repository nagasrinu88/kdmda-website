import Image from "next/image";
import Timeline from "./components/Timeline";
import YouTubeShowcase from "./components/YouTubeShowcase";
import ImageSlider from "./components/ImageSlider";

export const metadata = {
  title: "శ్రీ కానక దుర్గ మహాదేవి ఆలయం - హోమ్ పేజీ",
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

  const images = [
    { src: '/images/slide-1.jpg', alt: 'Image 1' },
    { src: '/images/slide-2.jpg', alt: 'Image 2' },
    { src: '/images/slide-3.jpg', alt: 'Image 3' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-b from-black/60 to-transparent">
        <ImageSlider images={images} interval={5000} />
        {/* <Image
          src="/images/IMG_20240417_081716.jpg" // You'll need to add this image to your public folder
          alt="Temple Hero Image"
          fill
          className="object-cover -z-1"
          priority
        /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-orange-400 p-8 bg-black/60">
          <h1 className="text-3xl md:text-2xl font-bold text-center mb-4">
            శ్రీ కనకదుర్గ మహాదేవి ఆలయం.
          </h1>
          <p className="text-xl md:text-xl text-center max-w-xl text-orange-200">
            మన ప్రాచీన దేవాలయపు జ్ఞానం మరియు ప్రశాంతతను అనుభవించండి.
          </p>
        </div>
      </div>

      {/* Temple Timings */}
      <div className="my-2">
        <div className="bg-orange-200 p-6 shadow-lg">
          <h2 className="text-center text-red-800 text-2xl font-bold mb-2">శ్రీ కనకదుర్గ మహాదేవి ఆలయం - దర్శన సమయాలు</h2>

          <p className="mb-2">భక్తుల శ్రద్ధా భక్తులకు అనుగుణంగా ఆలయ దర్శన సమయాలు నిర్ణయించబడినవి.</p>
          
          <p className="mb-2">అమ్మవారి కృపకు పాత్రులుగా మారి, దివ్య దర్శనం పొందండి.</p>

          <ul className="mb-2">
            <li>🌅 ప్రాతఃకాల దర్శనం: ఉదయం 6:00 AM నుండి 9:00 AM వరకు.</li>
            <li>🌇 సాయంత్ర దర్శనం: సాయంత్రం 4:00 PM నుండి 7:00 PM వరకు.</li>
          </ul>
          
          భక్తులు వీలైన సమయాల్లో విచ్చేసి అమ్మవారి కృపకు పాత్రులు కావాలని ఆలయ కమిటీ ప్రార్థిస్తోంది.
          <p className="text-red-600 text-center mt-3">🚩 ఓం శ్రీ కనకదుర్గా మహాదేవియే నమః 🚩</p>
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
