//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
//
//
//
//

//untuk pencarian perkata
function searchWord() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var elements = document.querySelectorAll(
    "p, h1, h2, h3, h4, h5, h6, li, td, th, span"
  ); // Menemukan semua elemen teks yang ingin dicari
  var searchResults = document.getElementById("searchResults");

  searchResults.innerHTML = ""; // Bersihkan hasil pencarian sebelumnya

  if (input.trim() !== "") {
    elements.forEach(function (element) {
      var content = element.textContent.toLowerCase();
      var regex = new RegExp("\\b(" + input + ")\\b", "gi"); // Membuat ekspresi reguler untuk pencarian kata yang tepat

      if (content.match(regex)) {
        var markedContent = content.replace(regex, "<mark>$1</mark>"); // Menandai kata yang cocok dengan elemen <mark>
        element.innerHTML = markedContent;
        searchResults.innerHTML +=
          "<p>Found in: " + element.nodeName.toLowerCase() + "</p>";
        searchResults.appendChild(element.cloneNode(true)); // Menambahkan elemen yang telah ditandai ke hasil pencarian
      }
    });
  } else {
    searchResults.textContent = "Please enter a word to search.";
  }
}

//layar ke dua
document.getElementById("search").addEventListener("click", function () {
  document.getElementById("layerKedua").style.display = "block"; // Menampilkan layer kedua saat tombol diklik
});
//layar ke dua close
document
  .getElementById("layerkeduaclose")
  .addEventListener("click", function () {
    document.getElementById("layerKedua").style.display = "none"; // Menampilkan layer kedua saat tombol diklik
  });
//untuk clear hasil pencarian kata
function clearResults() {
  document.getElementById("searchResults").innerHTML = "";
}
