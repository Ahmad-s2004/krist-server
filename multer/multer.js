const multer = require('multer')

let storage = multer.diskStorage({
    destination:function (req,file,callback){
        callback(null,"./uploads")
    },
    filename:function (req,file,callback){
        callback(null,`${file.originalname}`)
    }
})

const filefilter = (req,file,callback) =>{
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/webp"){
        callback(null,true)
    }else{
        callback(null, false)
        callback(new Error("Only png, jpg, webp and jpeg photos are allowed"))
    }
}

const upload = multer({
    storage: storage,
    fileFilter: filefilter
})

module.exports = upload



