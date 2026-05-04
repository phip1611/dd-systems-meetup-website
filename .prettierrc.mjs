export default {
  printWidth: 80,
  trailingComma: "all",
  tabWidth: 2,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.css", "*.js", "*.json", "*.md", "*.mjs", "*.ts", "*.yml"],
      excludeFiles: ["*.min.css", "*.min.js"],
    },
  ],
};
