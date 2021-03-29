const cloudinary = require('cloudinary');
const Datauri = require('datauri');
const { config } = require('dotenv');

// const datauri = new Datauri();
config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryConfig = async(file, next) => {
    try {
        Datauri.format('.png', file.buffer);
        const fileBuffer = datauri.content;
        await cloudinary.v2.uploader.upload(fileBuffer);
        return next();
    } catch (error) {
        console.log(error)
        console.log(ok)
        return (error)
    }
};

module.exports = {
    cloudinaryConfig,
}
