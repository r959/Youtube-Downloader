// Theme switcher
function setTheme(theme) {
  const body = document.body;

  // remove previous theme classes
  body.classList.remove("dark-theme", "light-theme", "custom-theme");

  // add new theme
  if (theme === "dark") body.classList.add("dark-theme");
  else if (theme === "light") body.classList.add("light-theme");
  else if (theme === "custom") body.classList.add("custom-theme");

  // save theme in localStorage
  localStorage.setItem("theme", theme);
}

// Load theme on page refresh + fade-in
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Add fade-in effect
  document.body.classList.add("loaded");
};

// Example: download button link
document.getElementById("downloadBtn").addEventListener("click", () => {
  // Replace with your actual .exe GitHub Release link later
  window.location.href = "https://github.com/r959/Youtube-Downloader/releases/download/V1.0/YTDownloaderSetup.exe";
});

