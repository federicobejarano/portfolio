const images = [
	{
		name: "cardenal",
		thumbnail: "1emFuiUFEpnLnrHavXR3-K0Fkhi9nCJvf",
		"hr image": "17BRJDvGRGM_vt4HUnPyNCsLnSKTJi3Wx"
	},
	{
		name: "juanele",
		thumbnail: "1BXQn9aHRbmkYtn9iWAZ2S_wdFNDtpSCS",
		"hr image": "1MrJ9YyjITpzkhj_x7f6QaUvhKT4ZgzjA"
	},
	{
		name: "la noche",
		thumbnail: "1lqJM6Ng26aO6O5iOX-DyV-OA3rrdjIrW",
		"hr image": "1RQrC_WBoo1VHnTJ7CuHGKYgBkZn2uzUS"
	},

	{
		name: "lobizon",
		thumbnail: "1emFuiUFEpnLnrHavXR3-K0Fkhi9nCJvf",
		"hr image": "1csCCTxv3qhJuKGIzH4X62AGt0GiosaPf"
	},
	{
		name: "lobizon 02",
		thumbnail: "1vv2wfHOkJjgb1HNo1izmUoTHNp7OKd_T",
		"hr image": "1wwdnB4W_EOsiqpGYWG2yRHPjrztnskrd"
	},
	{
		name: "mascotas",
		thumbnail: "13YKf5tD9PBWi1fWronjUq36lJEICK3mT",
		"hr image": "1kIOXBAL_3QTr8Pgdf_AZnrmtj8LxjO9p"
	},
	{
		name: "nido",
		thumbnail: "1CaAEIsyOyTE9O66v6tVk6XGsnSGsJelE",
		"hr image": "1PwZrQvWBXGNkRNvuXhkDQx81P3HBwgVn"
	},
	{
		name: "paco",
		thumbnail: "1Z9dDdvAcW519IC--CUUcV5Zaul4UhDV8",
		"hr image": "1CWFhHFgDEnqroboZNUGIvFEokbEeHH9Q"
	},
	{
		name: "riña",
		thumbnail: "1mZLFwIGGVTp9Ykbiy-UweMYpuVYdp7Cf",
		"hr image": "1Y2Jt9X_TOwu-fKIoHf5Ixj18PUBSN9r-"
	},
]

images.forEach((image, i) => {
  const { thumbnail: id } = image;
  const imgDiv = document.createElement("div");
  imgDiv.style.backgroundImage = "url('https://drive.google.com/uc?export=view&id=" + id + "')";
  const gallery = document.querySelector("#gallery");
  gallery.appendChild(imgDiv);
});
