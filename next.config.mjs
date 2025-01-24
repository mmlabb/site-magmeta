/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  // assetPrefix: "https://magmeta.com.br"
  images: {
    domains: ["images.unsplash.com"], // Adicione o domínio aqui
  },
};

export default nextConfig;
