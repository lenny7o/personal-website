import { MetadataRoute } from 'next'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: 'Lenny TESTU--CHARPENTIER',
    short_name: 'LennyTC',
    description:
      "Bienvenue sur le site personnel de Lenny TESTU--CHARPENTIER, un jeune passionné par l'entrepreneuriat et la technologie. Découvrez ses projets, son parcours et comment le contacter.",
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f5f5',
    theme_color: '#fafafa',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
