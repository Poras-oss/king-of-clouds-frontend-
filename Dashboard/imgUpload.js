const inputFiles = document.querySelectorAll(".imgInput");
const imgArea = document.querySelectorAll(".img-area");
const deleteBtn = document.querySelector(".img-area");
// console.log(inputFile_1);
// console.log(imgArea[1]);

function UploadImage(index, imgUrl) {
  let img = document.createElement("img");
  img.src = imgUrl;
  imgArea[index].appendChild(img);
}

inputFiles.forEach((file, index) => {
  //   console.log(file);
  file.addEventListener("change", function () {
    imgUrl = URL.createObjectURL(this.files[0]);
    UploadImage(index, imgUrl);
  });
});


