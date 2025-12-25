export function Features() {
  const features = [
    {
      icon: '🎬',
      title: '最新电影',
      desc: '最新院线大片，经典老片，高清画质',
    },
    {
      icon: '📺',
      title: '热门剧集',
      desc: '美剧、韩剧、日剧等，每日更新',
    },
    {
      icon: '🎭',
      title: '精彩短剧',
      desc: '轻松观看，随时随地享受',
    },
    {
      icon: '🎪',
      title: '热门综艺',
      desc: '娱乐休闲，放松心情',
    },
    {
      icon: '🎨',
      title: '最新动漫',
      desc: '二次元内容，精彩纷呈',
    },
    {
      icon: '⭐',
      title: '免费观看',
      desc: '无需注册，高清流畅',
    },
  ]

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">主要功能</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-white/80">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
