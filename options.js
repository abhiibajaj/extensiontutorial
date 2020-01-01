let page = document.getElementById("buttonDiv")
const kButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"]

function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement("button")
    button.style.background = item
    button.addEventListener("click", function() {
      chrome.storage.sync.set({ color: item }, function() {
        console.log("Colour is :" + item)
      })
    })
    page.appendChild(button)
  }
}

constructOptions(kButtonColors)
