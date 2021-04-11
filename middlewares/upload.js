const cloudinary = require('cloudinary');
const Datauri = require('datauri');
const { config } = require('dotenv');
const { cloudinaryConfig } = require('../services')

config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const cloudinaryConfig = async(req, res, next) => {
//        try {
//         const photo = req.files.picture;
//         const file = req.files.file
//         console.log(file)
//         cloudinary.uploader.upload(photo.tempFilePath, (err, result) => {
//             res.status(200).json({
//                 status: "success",
//                 result
//               });
//         });
//        } catch (error) {
//             console.log(error)
//             return (error)
//         }
// };

const cloudinaryUpload = async (req, res, next) => {
    try {
        console.log(req.files)
        const [cvData, photoData] = await Promise.all([
            cloudinaryConfig(req.files.cv.tempFilePath),
            cloudinaryConfig(req.files.photo.tempFilePath),
          ]);
          req.body.cv = cvData.secure_url;
          req.body.picture = photoData.secure_url;
          console.log(cvData.secure_url)
          console.log(photoData.secure_url)
          next();
    } catch (error) {
      console.log(error);
    }
  };

  const cloudinaryAdminUpload = async (req, res, next) => {
    try {
        console.log(req.files)
        const [photoData] = await Promise.all([
            cloudinaryConfig(req.files.photo.tempFilePath),
          ]);
          req.body.picture = photoData.secure_url;
          console.log(photoData.secure_url)
          next();
    } catch (error) {
      console.log(error);
    }
  };
 
module.exports = {
    cloudinaryUpload,
    cloudinaryAdminUpload
}
