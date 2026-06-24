import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  path?: string
}

export default function Seo({ title, description, path = '' }: SeoProps) {
  const siteUrl = 'https://mahaattie.com'
  const fullTitle = `${title} — Maha Attié`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
