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

width: 150px;

height: 150px;

background-color: rgba(255, 255, 255, 0.7);

z-index: 999;

`;

const lottieContainer = document.createElement('div');

lottieContainer.id = 'lottieContainer';

lottieContainer.style.cssText = `

width: 150px;

height: 150px;

`;

lottieContainer.style.display = 'none';

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

renderer: 'svg', // Use 'svg' or 'canvas' based on your preference

loop: true, // Set to true if you want the animation to loop

autoplay: true, // Set to true if you want the animation to start automatically

path: 'https://cdn.jsdelivr.net/gh/sabatage3/lottieFiles@337adfdec05e149f6fbf25ecc373169510377e97/PreloaderClockedLottie150px.json', // Replace with the actual URL of your Lottie JSON file

};

const anim = lottie.loadAnimation(animationData);

// Replace the following lines with the actual code that loads your external resources

// For demonstration purposes, we'll use a setTimeout to simulate loading external resources.

setTimeout(hideOverlay, 100); // Replace with your actual loading code.
