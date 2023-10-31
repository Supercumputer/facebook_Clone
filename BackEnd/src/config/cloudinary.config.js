

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: 'dqhokezxt',
  api_key: 133151711628314,
  api_secret: 'SgFeiHqV3YHi_YdLu7x3jLzaW90'
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png'],
  params: {
    folder: 'imgApi'
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;

// https://viblo.asia/p/tich-hop-cloud-services-cho-image-upload-trong-nodejs-va-react-web-app-yMnKM01a57P
// dang img