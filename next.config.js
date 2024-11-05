const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "vn-VN"],
    defaultLocale: "vn-VN",
  },
  reactStrictMode: true,
});
