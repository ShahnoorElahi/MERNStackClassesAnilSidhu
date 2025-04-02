const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
  })
}).single("user_file");

app.post("/upload", upload, (req, resp) => {
  
function getImageNames(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const imageNames = files.filter(file => {
          const extname = path.extname(file).toLowerCase();
          return extname === '.jpg' || extname === '.jpeg' || extname === '.png' || extname === '.gif'; 
        });
        resolve(imageNames);
      }
    });
  });
}

const folderPath = './uploads'; // Path to your image folder

getImageNames(folderPath)
  .then(imageNames => {
    console.log(imageNames); // Output: Array of image names
    const imageData = fs.readFileSync(`./uploads/${imageNames[0]}`); 
    resp.set('Content-Type', 'image/jpeg');
    resp.send(imageData); 
    console.log(imageData);
  })
  .catch(error => {
    console.error('Error reading images:', error);
  });

















  

  



  
});

app.get("/ad", (req, resp) => {
  resp.send(`<!DOCTYPE html>
<html>
<head>
  <title>Image Upload</title>
</head>
<body>

  <h2>Single Image Upload</h2>

  <form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="user_file" accept="image/*">
    <button type="submit">Upload</button>
  </form>

</body>
</html>`)
});
























app.listen(5000);