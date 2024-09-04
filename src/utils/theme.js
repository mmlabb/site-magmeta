function themeSwitch(isDarkMode = false) {
    console.log("🚀 ~ themeSwitch ~ isDarkMode:", isDarkMode)
    const body = document.getElementById('app-theme')
  
    isDarkMode = !isDarkMode
  
    const logoImagens = document.querySelectorAll('img.logo') // Seleciona apenas imagens com classe "logo"
  
    for (const img of logoImagens) {
      const src = img.getAttribute('src')
  
      if (isDarkMode) {
        const novoNome = src.replace('black', 'white')
        img.src = novoNome
      } else {
        const novoNome = src.replace('white', 'black')
        img.src = novoNome
      }
    }
  
    if (isDarkMode) {
      body.classList.remove('theme-light')
      body.classList.add('theme-dark')
    } else {
      body.classList.remove('theme-dark')
      body.classList.add('theme-light')
    }
  
    // setTimeout(() => {
    //   const loadingWrapper = document.getElementById("loading-wrapper");
    //   loadingWrapper.style.opacity = "0";
    //   setTimeout(() => {
    //     loadingWrapper.style.display = "none";
    //   }, 300);
    // }, 3000);
  
    // const divAnoAtual = document.getElementById('ano-atual')
    // divAnoAtual.textContent = new Date().getFullYear()
  
    // for (var i = 0; i < chkList.length; i++) {
    //   chkList[i].addEventListener('click', function () {
  
    //   })
    // }
  }
  
  export default themeSwitch
  
  // const logoPath = "../src/img";
  
  /*   const novoNome = src.replace("white", "black"); // "./img/assets/logo-black"
        img.className = novoNome;
        img.src = novoNome; // Assume que todas as logos são .svg */
  