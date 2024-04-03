document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    let isDarkMode = false;

    toggleThemeBtn.addEventListener('click', function() {
        const body = document.body;
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
        } else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
        }
    });
});
