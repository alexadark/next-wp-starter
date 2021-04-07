const slashes = require("remove-trailing-slash");
const imgHost = slashes(process.env.WP_URL).split("/")[2];

module.exports = {
  images: {
    domains: [imgHost],
  },
  future: {
    webpack5: true,
  },
};
