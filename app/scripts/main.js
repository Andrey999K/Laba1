document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  console.log("Hello, World!");
  window.addEventListener("scroll", () => {
    let y = window.pageYOffset;
    const header = document.querySelectorAll(".header");

    if (y > 0) {
      header[0].classList.add("scroll");
    } else {
      header[0].classList.remove("scroll");
    }
  });

  let button = document.querySelector(".form__find");
  button.addEventListener("click", e => {
    let country = document.querySelector("#where").value;
    switch (country) {
      case "Россия":
        window1 = window.open("Russia.html");
        break;
      case "Китай":
        window2 = window.open("China.html", "Китай");
        break;
      case "Япония":
        window3 = window.open("Japan.html");
        break;
    }
  });

  // alert(country.value);
});
