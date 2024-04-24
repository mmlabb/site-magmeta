document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeBtn = document.getElementById("toggle-theme-btn");
  let isDarkMode = true;

  toggleThemeBtn.addEventListener("click", function () {
    const body = document.body;
    isDarkMode = !isDarkMode;

    const logoImagens = document.querySelectorAll("img.logo"); // Seleciona apenas imagens com classe "logo"

    for (const img of logoImagens) {
      const src = img.getAttribute("src");
      if (isDarkMode && src.match(/.*white\.svg$/)) {
        // Troca a logo apenas se for modo escuro e terminar em white.svg
 
        const novoNome = src.replace("white", "black"); // "./img/assets/logo-black"
        img.className = novoNome;
        img.src = novoNome;
        
      }
      const novoNome = src.replace("white", "black"); // "./img/assets/logo-black"
      img.className = novoNome;
      img.src = novoNome; // Assume que todas as logos são .svg
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
