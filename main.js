// const { google } = require("googleapis");
// const fs = require('fs');
//
// // importing the relevant credentials from our credentials.json file
// const credentials = require("./credentials.json");
//
// // specifying which scopes we want to use
// const scopes = [
//   "https://www.googleapis.com/auth/drive"
// ];
//
// //  We use google.auth.JWT to create a JSON Web Token object(?)
//
// const auth = new google.auth.JWT(
//   credentials.client_email, null,
//   credentials.private_key, scopes
// );
//
// // we call the Drive API and we pass our JSON Web Token object as an argument
// const drive = google.drive({version: "v3", auth});
//
// async function () {
//
//   let res = await new Promise((resolve, reject) => {
//     drive.files.list({
//       pageSize: 5,
//       fields: 'files(name, webViewLink)',
//       orderBy: 'createdTime desc'
//     }, function (err, res) {
//       if (err) {
//         reject(err);
//       }
//       resolve(res);
//     });
//   });
//
//   //  Then, after a bit of string manipulation, we can use
//   // fs.writeFile to create the file locally
//
//   let data = 'Name,URL\n';
//
//   res.data.files.map(entry => {
//     const { name, webViewLink } = entry;
//     data += `${name},${webViewLink}\n`;
//   });
//
//   fs.writeFile('data.csv', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
//
// })()

const images = [
  "1b2pW92ApCyHZ28LDNnRTgJib-d6taW6K",
  "10h5ibNWoBaNWZLedA0EqVrLrnucGECmK",
  "1tm9XhGlhpeTKaBwPZpjllh1vYA0WfnYy",
  "1IiwSwgQXVpITKxq0APKnQzNzwhg4xWFA",
  "1m7uzYqbXzvphnJvtZ2ht0gvinkPRmy-M",
  "1sjprLBsfoWS2Chh9W97lwH4gOdH6Rg7e"
];

images.forEach((image, i) => {
  const imgDiv = document.createElement("div");
  imgDiv.className = "thumbnail";
  imgDiv.style.backgroundImage = "url(https://drive.google.com/uc?export=view&id=" + image;

  const gallery = document.querySelector("#gallery");
  gallery.appendChild(imgDiv);
});
