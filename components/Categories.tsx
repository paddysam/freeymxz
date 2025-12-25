import Link from 'next/link'

export function Categories() {
  const categories = [
    { name: '电影', path: '/movie', icon: '🎬' },
    { name: '剧集', path: '/tv', icon: '📺' },
    { name: '短剧', path: '/short', icon: '🎭' },
  ]

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">内容分类</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {categories.map((category) => (
          <Link
            key={category.path}
            href={category.path}
            className="bg-white/20 backdrop-blur-lg rounded-xl px-8 py-6 text-white text-xl font-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center text-white/80">
        <p>更多内容请访问：<a href="https://www.freeymxz.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">https://www.freeymxz.com/</a></p>
      </div>
    </div>
  )
}
