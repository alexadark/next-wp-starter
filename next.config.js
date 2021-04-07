const slashes = require("remove-trailing-slash");
const imgHost = slashes(process.env.WP_URL).split("/")[2];

console.log(imgHost, "esto que es");
module.exports = {
  images: {
    domains: [imgHost],
  },
};
