module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, path: false };

    return config
  }
}

