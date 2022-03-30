module.exports = {
  onSuccess: () => {
    console.log('onInit: I run before anything else 🐣');
  },
  onPreBuild: async ({ utils }) => {
    console.log("my plugin loaded!")

    try {
    } catch (error) {
      utils.build.failBuild('Failure message', { error })
    }
  },
}

