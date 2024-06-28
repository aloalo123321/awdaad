let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const element = document.createElement("div");
  element.textContent = "gamosuli sityva";
  document.querySelector(".rame").appendChild(element);
});
