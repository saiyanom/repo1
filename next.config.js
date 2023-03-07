const path = require('path')
// const withImages = require('next-images')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },
  images: {
    loader: "imgix",
    path: "localhost",
  }
}


// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }
// })