const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';

document.body.classList.toggle('dark', savedTheme === 'dark');
themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

function onScrollAnimate() {
  document.querySelectorAll('.animate').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('load', onScrollAnimate);