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
  imgDiv.className = "thumbnail col-md-6";
  imgDiv.style.backgroundImage = "url(https://drive.google.com/uc?export=view&id=" + image;

  const gallery = document.querySelector("#gallery");
  gallery.appendChild(imgDiv);
});
