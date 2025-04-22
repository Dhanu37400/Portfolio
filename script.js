function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function generatePalette() {
    const palette = document.getElementById('palette');
    palette.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const color = getRandomColor();
      const box = document.createElement('div');
      box.className = 'color-box';
      box.style.backgroundColor = color;
      box.textContent = color;
      box.addEventListener('click', () => copyToClipboard(color));
      palette.appendChild(box);
    }
  }
  
  function copyToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 1000);
    });
  }
  
  // Generate initial palette
  generatePalette();
  