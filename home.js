document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeBtn = document.getElementById("toggle-theme-btn");
  let isDarkMode = true;

  isDarkMode = !isDarkMode;

  toggleThemeBtn.addEventListener("click", function () {
    const body = document.body;
    isDarkMode = !isDarkMode;

    // const links = document.querySelectorAll(".nav-link");

    // links.forEach((link) => {
    //   if (isDarkMode) {
    //     link.classList.remove("dark-link");
    //     link.classList.add("light-link");
    //   } else {
    //     link.classList.remove("light-link");
    //     link.classList.add("dark-link");
    //   }
    // });

    const logoImagens = document.querySelectorAll("img.logo"); // Seleciona apenas imagens com classe "logo"

    for (const img of logoImagens) {
      const src = img.getAttribute("src");

      if (isDarkMode) {
        const novoNome = src.replace("black", "white");
        img.src = novoNome;
      } else {
        const novoNome = src.replace("white", "black");
        img.src = novoNome;
      }
    }

    if (isDarkMode) {
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");
    } else {
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");
    }
  });
});

const logoPath = "../src/img";

/*   const novoNome = src.replace("white", "black"); // "./img/assets/logo-black"
      img.className = novoNome;
      img.src = novoNome; // Assume que todas as logos são .svg */
