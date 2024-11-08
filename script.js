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
});
