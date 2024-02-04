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
  box-sizing: border-box; /* Agregamos esta propiedad para incluir el padding y el borde en el ancho y alto del overlay */
  padding: 10px; /* Agregamos un pequeño padding para garantizar que el contenido no toque los bordes */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Agregamos una sombra para darle un aspecto visual más atractivo */
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
  max-width: 100%;
  max-height: 100%;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

// Additional styles for mobile devices
const mobileStyles = `
  @media screen and (max-width: 767px) {
    #loader {
      /* Agregamos estilos específicos para dispositivos móviles */
    }
  }
`;

// Append mobile styles to the head of the document
const styleTag = document.createElement('style');
styleTag.textContent = mobileStyles;
document.head.appendChild(styleTag);
