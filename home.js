document.addEventListener("DOMContentLoaded", function () {
  const chk= document.getElementById("chk");
  let isDarkMode = true;

  

  chk.addEventListener("click", function () {
    const body = document.body;

    isDarkMode = !isDarkMode;


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
