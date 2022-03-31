
// const { writeProductsToJson } = require("./localFunctions/convertMarkdownToJson")

module.exports = {
  // onSuccess: () => {
  //   console.log('onInit: I run before anything else 🐣');
  // },
  // onPreBuild: async ({ utils }) => {
  //   // console.log("my plugin loaded!")


  // },

  // onPreBuild: async ({ utils }) => {
  //   console.log("my plugin loaded!")

  //   try {
  //   } catch (error) {
  //     utils.build.failBuild('Failure message', { error })
  //   }
  // },

  onPostBuild: () => {

    console.log("Hello world from onPostbuild event!")

    // fs.writeFileSync('./shared/data/productsData.json', JSON.stringify(writeProductsToJson()));
  },
}

