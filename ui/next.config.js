/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  env: {
    // PrimaryDomain: ${PrimaryDomain},
    // Jdownloader2: ${Jdownloader2},
    // Netdata: ${Netdata},
    // Photoprism: ${Photoprism},
    // Transmission: ${Transmission},
    // Codeserver: ${Codeserver},
    // Jellyfin: ${Jellyfin},
    // Jellyfin2: ${Jellyfin2},
    // Jenkins: ${Jenkins},
    // Nextcloud: ${Nextcloud},
    // Tomcat: ${Tomcat},
    // Novnc: ${Novnc},
    // CasaOS: ${CasaOS},
    // Minecraft: ${Minecraft},
    // Dynmap: ${Dynmap},
  }
}

module.exports = nextConfig
