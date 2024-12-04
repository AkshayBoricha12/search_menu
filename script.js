let list = document.querySelector("ul");
let values = document.querySelectorAll("li");

function filterValues() {
  let searchInput = document.getElementById("search-item").value.toUpperCase();

  for (let i = 0; i < values.length; i++) {
    if (values[i].innerHTML.toUpperCase().indexOf(searchInput) > -1) {
      values[i].style.display = "";
    } else {
      values[i].style.display = "none";
    }
  }
}
