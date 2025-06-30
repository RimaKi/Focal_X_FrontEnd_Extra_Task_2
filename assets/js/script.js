let toggleBtn = document.querySelector('nav #toggleTheme');
let header = document.querySelector('header');

let orginalToggleIcon = toggleBtn.innerHTML;

toggleBtn.addEventListener('click', function () {
    let isDark = header.classList.toggle('dark');

    toggleBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : orginalToggleIcon;
});
