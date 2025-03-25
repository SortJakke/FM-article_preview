const shareIcon = document.querySelector(".author__section--share-icon")
const shareBox = document.querySelector(".author__section--share-box")

let display = false

shareIcon.addEventListener("click", () => {
  if (!display) {
    shareBox.style.display = "flex"
    shareIcon.classList.add("active")
    display = true
  } else {
    shareBox.style.display = "none"
    shareIcon.classList.remove("active")
    display = false
  }
})
