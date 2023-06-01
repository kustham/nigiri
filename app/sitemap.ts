import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.agni.ninja',
            lastModified: new Date(),
        },
    ]
}
