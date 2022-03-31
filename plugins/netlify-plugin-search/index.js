

const search = require("./search")

module.exports = {

  onPostBuild: () => {

    console.log("Hello world from onPostbuild event!")

    search('./content/products')
  },
}

