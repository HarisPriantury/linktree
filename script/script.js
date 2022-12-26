const button = document.querySelector(".mode");
const textMode = document.querySelector(".mode p");

button.addEventListener("click", function () {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    textMode.innerHTML = "🔳 Dark Mode";
    button.style.backgroundColor = "black";
    button.style.color = "white";
  } else {
    textMode.innerHTML = "🔲 Light Mode";
    button.style.backgroundColor = "white";
    button.style.color = "black";
  }
});

//memncoba membuat animasi javascript
const tittle = document.querySelector(".title");
const textTittle = tittle.textContent;
//change stirng text content to array
const newText = [];
for (let i = 0; i < textTittle.length; i++) {
  if (i % 2 == 0) {
    newText.push(`<span class="hover1">${textTittle[i]}</span>`);
  } else {
    newText.push(`<span class="hover2">${textTittle[i]}</span>`);
  }
  console.log(textTittle[i]);
}
console.log(newText);
tittle.innerHTML = newText.join("");
