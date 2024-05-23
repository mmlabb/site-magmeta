document.addEventListener("DOMContentLoaded", function () {
  const chk = document.getElementById("chk");
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

  function ajustarAlturaContainers() {
    const alturaTela = window.innerHeight;
    const containersPortifolio = document.querySelectorAll(
      ".container-portifolio"
    );

    containersPortifolio.forEach((container) => {
      container.style.height = alturaTela + "px";
    });
  }

  ajustarAlturaContainers();
  window.addEventListener("resize", ajustarAlturaContainers);

  const portfolioBoxes = document.querySelectorAll(".box-portifolio");

  portfolioBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      expandBox(box);
    });

    box.addEventListener("mouseout", () => {
      resetBoxes();
    });
  });

  function expandBox(box) {
    box.style.width = "40%";

    portfolioBoxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.style.width = "20%";
      }
    });
  }

  function resetBoxes() {
    portfolioBoxes.forEach((box) => {
      if (window.innerWidth > 800) {
        box.style.width = "25%"; // Set width to 25% for smaller screens
      } else {
        box.style.width = "50%"; // Keep the original width for tablets and larger
      }
    });
  }
});

const logoPath = "../src/img";

/*   const novoNome = src.replace("white", "black"); // "./img/assets/logo-black"
      img.className = novoNome;
      img.src = novoNome; // Assume que todas as logos são .svg */
