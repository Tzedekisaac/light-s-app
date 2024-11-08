// Adjust background brightness
const brightnessSlider = document.getElementById('brightness');
brightnessSlider.addEventListener('input', () => {
  document.body.style.opacity = brightnessSlider.value;
});

// Change color temperature
const colorButtons = document.querySelectorAll('.color');
colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.getAttribute('data-color');
    document.body.style.backgroundColor = color;
  });
  
  // Add this to script.js to handle night mode
const nightModeButton = document.getElementById('nightMode');
nightModeButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#2e2b1f'; // Dim warm color
  document.body.style.opacity = '0.3'; // Lower brightness
});
});
