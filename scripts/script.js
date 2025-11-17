const button = document.getElementById("theme-button");
const body = document.body;

const Savedtheme = localStorage.getItem("theme");
temaEscuro(Savedtheme === "dark");

function temaEscuro(type) {
  if (type == true) {
    body.classList.add("dark");
    button.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove("dark");
    button.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}
button.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  temaEscuro(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const navLinks = document.querySelectorAll("#menu ul a.link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    if (href === "#profile") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});
