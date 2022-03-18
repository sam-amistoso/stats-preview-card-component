module.exports = {
  content: ['./dist/**.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile':
          "linear-gradient(to right bottom, rgba(154,96,199,0.5), rgba(154,96,199,0.2)), url('/dist/assets/images/image-header-mobile.jpg')",
        'hero-desktop':
          "linear-gradient(to right bottom, rgba(154,96,199,0.5), rgba(154,96,199,0.2)), url('/dist/assets/images/image-header-desktop.jpg')",
        'hero-overlay':
          'linear-gradient(to right bottom, rgba(154,96,199,0.5), rgba(154,96,199,0.2))',
      },
    },
  },
  plugins: [],
};
