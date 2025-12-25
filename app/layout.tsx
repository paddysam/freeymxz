import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '影迷小站 - 免费在线影视平台',
  description: '免费在线观看最新电影、电视剧、短剧、综艺、动漫等高清视频，每日更新海量影视资源',
  keywords: '免费电影,在线观看,电视剧,短剧,综艺,动漫,高清视频,影迷小站',
  openGraph: {
    title: '影迷小站 - 免费在线影视平台',
    description: '免费在线观看最新电影、电视剧、短剧、综艺、动漫等高清视频',
    url: 'https://www.freeymxz.com/',
    siteName: '影迷小站',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
