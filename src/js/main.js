
const toggleButton = document.getElementById('darkModeToggle');

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// بررسی وضعیت ذخیره شده یا تم سیستم هنگام بارگذاری صفحه
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
}

// اضافه کردن رویداد کلیک به دکمه
toggleButton?.addEventListener('click', toggleDarkMode);