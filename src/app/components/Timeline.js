import Image from "next/image";

export default function Timeline() {
  return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Temple Timeline</h2>
        <div className="space-y-8">
          {/* Timeline Item */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/morning-puja.jpg"
                alt="Morning Puja"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <time className="font-semibold">6:00 AM</time>
                <span className="text-sm">Daily</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Morning Abhishekam</h3>
              <p className="text-gray-600">
                Start your day with the divine morning ritual. The temple priests perform the sacred abhishekam ceremony, offering prayers and blessings for all devotees.
              </p>
            </div>
          </div>

          {/* Timeline Item */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/noon-aarti.jpg"
                alt="Noon Aarti"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <time className="font-semibold">12:00 PM</time>
                <span className="text-sm">Daily</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Madhyahna Aarti</h3>
              <p className="text-gray-600">
                Join us for the midday prayers and receive blessings. This ceremony includes special offerings and spiritual discourses.
              </p>
            </div>
          </div>

          {/* Timeline Item */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/evening-puja.jpg"
                alt="Evening Puja"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 text-orange-600 mb-2">
                <time className="font-semibold">6:30 PM</time>
                <span className="text-sm">Daily</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sandhya Aarti</h3>
              <p className="text-gray-600">
                End your day with the serene evening aarti. Experience the peaceful atmosphere as we close the day with traditional prayers and bhajans.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
