function showImage(category) {
  var content = document.getElementById("content");

  content.innerHTML = "";

  var imgElement = document.createElement("img");

  switch (category) {
    case "car":
      imgElement.src = "./car.jpeg";
      break;
    case "animal":
      imgElement.src = "./animal.jpeg";
      break;
    case "sky":
      imgElement.src = "./sky.jpeg";
      break;
    default:
      break;
  }

  content.appendChild(imgElement);
}
let count = 1;
var countBox = document.getElementById("count");
var increment = document.getElementById("increment");
var decriment = document.getElementById("decriment");

increment.onclick = () => {
  count++;
  console.log("increment ", count);
  //countBox.innerText = `${count}`;
};

decriment.onclick = () => {
  count--;
  console.log("decriment ", count);
  //countBox.innerText = `${count}`;
};
countBox.innerText = `${count}`;
