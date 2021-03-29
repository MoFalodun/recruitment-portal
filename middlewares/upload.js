const cloudinary = require('cloudinary').v2;
const Datauri = require('datauri');
const { config } = require('dotenv');

config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryConfig = async(req, res, next) => {
       try {
        const file = req.files.photo;
        console.log(file)
        cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
            res.status(200).json({
                status: "success",
                result
              });
        });
       } catch (error) {
            console.log(error)
            return (error)
        }
};

module.exports = {
    cloudinaryConfig,
}
