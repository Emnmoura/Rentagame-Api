const cloudinary = require("cloudinary").v2;
const { Cloudinary, CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:    process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "RentAGame",
      resource_type: "image",
    },
  });

  //const storageVideo = new CloudinaryStorage({
    //cloudinary,
    //params: {
      //folder: "RentAGame",
      //resource_type: "video",
   // },
 // });

 const uploadImage = multer({ storage});

  
  module.exports = uploadImage;