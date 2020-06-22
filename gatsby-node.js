require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es5",
  },
})

exports.createPages = require("./gatsby-node.ts").createPages
