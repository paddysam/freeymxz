import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Categories } from '@/components/Categories'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Features />
        <Categories />

        <div className="mt-16 text-center">
          <Link
            href="https://www.freeymxz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            立即访问网站 →
          </Link>
        </div>
      </div>
    </main>
  )
}
