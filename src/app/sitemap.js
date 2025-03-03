

export default function sitemap() {
  return [
    {
      url: "https://magmeta.com.br",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://magmeta.com.br/a-magmeta",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
