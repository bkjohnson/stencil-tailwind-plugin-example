const { execSync } = require("child_process");

module.exports = function (eleventyConfig) {
  eleventyConfig.on("eleventy.after", async () => {
    console.log("Building Tailwind…");
    console.log(execSync("npm run build:tailwind").toString());
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};
