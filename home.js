document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeBtn = document.getElementById("toggle-theme-btn");
  let isDarkMode = true;

  toggleThemeBtn.addEventListener("click", function () {
    const body = document.body;
    isDarkMode = !isDarkMode;

    const logoImagens = document.querySelectorAll("img.logo"); // Seleciona apenas imagens com classe "logo"

    for (const img of logoImagens) {
      const src = img.src;
      const newFilename = isDarkMode ? "logo-white" : "logo-black";
      img.src = `${newFilename}.svg`; // Assume que todas as logos são .svg
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
