module.exports = {
    distDir: "build",
    rewrites: async () => [
        {
          source: "/public/wordle/index.html",
          destination: "/pages/api/wordle.js",
        },
      ],
};
