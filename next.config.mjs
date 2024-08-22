/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
