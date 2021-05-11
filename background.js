const body = document.querySelector("body");

const IMG_NUMBER = 5;

const handleImgLoad = () => {
  console.log("finished loading");
};

const paintImage = (imgNumber) => {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);

  //image.addEventListener("loadend", handleImgLoad);
};

const getRandom = () => {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
};

const bgInit = () => {
  const randomNumber = getRandom();
  paintImage(randomNumber);
};

bgInit();
