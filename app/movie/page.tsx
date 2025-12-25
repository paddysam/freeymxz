import Link from 'next/link'

export default function MoviePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6">🎬 电影专区</h1>
          <p className="text-xl mb-8 opacity-90">
            最新院线大片，经典老片，高清画质，免费观看
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <p className="text-lg mb-6">
              访问 <strong>https://www.freeymxz.com/</strong> 观看最新电影
            </p>
            <Link
              href="https://www.freeymxz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-all duration-300"
            >
              前往观看 →
            </Link>
          </div>
          <Link
            href="/"
            className="text-white/80 hover:text-white underline"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
