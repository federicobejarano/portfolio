const images = [
  "17BRJDvGRGM_vt4HUnPyNCsLnSKTJi3Wx",
  "1MrJ9YyjITpzkhj_x7f6QaUvhKT4ZgzjA",
  "1RQrC_WBoo1VHnTJ7CuHGKYgBkZn2uzUS",
  "1csCCTxv3qhJuKGIzH4X62AGt0GiosaPf",
  "1wwdnB4W_EOsiqpGYWG2yRHPjrztnskrd",
  "1kIOXBAL_3QTr8Pgdf_AZnrmtj8LxjO9p",
  "1PwZrQvWBXGNkRNvuXhkDQx81P3HBwgVn",
  "1CWFhHFgDEnqroboZNUGIvFEokbEeHH9Q",
  "1Y2Jt9X_TOwu-fKIoHf5Ixj18PUBSN9r-",
];

images.forEach((image, i) => {

  const imgDiv = document.createElement("div");
  imgDiv.className = "thumbnail col-sm-6";
  imgDiv.style.backgroundImage = "url(https://drive.google.com/uc?export=view&id=" + image;

  const gallery = document.querySelector("#gallery");
  gallery.appendChild(imgDiv);
});
