// Create the overlay and Lottie container
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
  width: 150px;
  height: 150px;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 150px; /* Establecer tamaño mínimo */
  min-height: 150px; /* Establecer tamaño mínimo */
  max-width: 150px; /* Establecer tamaño máximo igual al mínimo */
  max-height: 150px; /* Establecer tamaño máximo igual al mínimo */
`;

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Function to hide the overlay and display the Lottie animation
function hideOverlay() {
  overlay.style.display = 'none';
  lottieContainer.style.display = 'block';
}

// Load the Lottie animation
const animationData = {
  container: lottieContainer,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://cdn.jsdelivr.net/gh/sabatage3/lottieFiles@337adfdec05e149f6fbf25ecc373169510377e97/PreloaderClockedLottie150px.json',
};

const anim = lottie.loadAnimation(animationData);

// Use DOMContentLoaded event to hide the overlay after the page has fully loaded
document.addEventListener('DOMContentLoaded', hideOverlay);
