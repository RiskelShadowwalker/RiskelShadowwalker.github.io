const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://arborviewah.com/wp-content/uploads/2021/05/ball-royalheader.jpg") {
    myImage.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOV3iE864uWoQW1h1Wi_o_KqFFBSpi2ZgLsVXQEj-Ln85BiFSNYLLXW0&s=10");
  } else {
    myImage.setAttribute("src", "https://arborviewah.com/wp-content/uploads/2021/05/ball-royalheader.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Ball Pythons are amazing! ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Ball Pythons are amazing!, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}