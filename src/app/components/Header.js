import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-orange-800 bg-yellow-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">
              <Image src="/logo.jpg" alt="Logo" width={62} height={62} />
            </Link>
          </div>
          
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              <Link href="/" className="text-white hover:text-gray-900 px-3 py-2">
                Home
              </Link>
              <Link href="/homams" className="text-white hover:text-gray-900 px-3 py-2">
                Homams
              </Link>
              <Link href="/donors" className="text-white hover:text-gray-900 px-3 py-2">
                Donors
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-900 px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 