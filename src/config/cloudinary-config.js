const cloudinary = require('cloudinary').v2
require('dotenv').config()

/* Setting the cloudinary configuration to the cloudinary object. */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = cloudinary
