function setTheme(theme) {
  document.body.className = theme==='dark' ? '' : theme;
  localStorage.setItem('theme', theme);
}
// Load saved or system theme
const saved = localStorage.getItem('theme');
if(saved) setTheme(saved);
else if(window.matchMedia('(prefers-color-scheme: light)').matches) setTheme('light');

// Animate feature cards
const cards=document.querySelectorAll('.feature-card');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('visible')});
},{threshold:.2});
cards.forEach(c=>obs.observe(c));

// Download button
document.getElementById('downloadBtn').addEventListener('click', () => {
  window.location.href = "https://github.com/r959/Youtube-Downloader/releases/download/V1.0/YTDownloaderSetup.exe";
});

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Add fade-in class
  document.body.classList.add("loaded");
};

