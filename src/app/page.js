import Image from "next/image";
import Timeline from "./components/Timeline";
import YouTubeShowcase from "./components/YouTubeShowcase";
import ImageSlider from "./components/ImageSlider";
import FeaturesBlock from "./components/FeaturesBlock";

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
    { id: '1', title: 'శ్రీ కనకదుర్గ మహాదేవి ఆలయం.', description: 'మన ప్రాచీన దేవాలయపు జ్ఞానం మరియు ప్రశాంతతను అనుభవించండి.', image: '/images/slide-1.jpg', alt: 'Image 1' },
    { id: '2', title: 'శ్రీ కనకదుర్గ మహాదేవి ఆలయం.', description: 'మన ప్రాచీన దేవాలయపు జ్ఞానం మరియు ప్రశాంతతను అనుభవించండి.', image: '/images/slide-2.jpg', alt: 'Image 2' },
    { id: '3', title: 'శ్రీ కనకదుర్గ మహాదేవి ఆలయం.', description: 'మన ప్రాచీన దేవాలయపు జ్ఞానం మరియు ప్రశాంతతను అనుభవించండి.', image: '/images/slide-3.jpg', alt: 'Image 3' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImageSlider heroItems={images} interval={5000} />

      <div className="max-w-6xl mx-auto">
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
        <FeaturesBlock />
      </div>
    </div>
  );
}
