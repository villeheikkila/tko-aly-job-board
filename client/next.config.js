require('dotenv').config();
module.exports = {
    env: {
        strapiAPIToken: process.env.STRAPI_API_TOKEN,
        srapiURI: process.env.STRAPI_URI,
    },
};
