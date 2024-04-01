/* Variables
-------------------------------------------------- */
// STEP 1a: Grab the <range> element inside the <dd id="alpha"> element for displaying the alpha value
const alphaSlider = document.querySelector('#alpha input[type="range"]');
// STEP 1b: Grab the <output> element just after the previous element
const alphaValue = document.querySelector('#alpha output');
// STEP 1c: Grab the <range> element inside the <dd id="beta"> element for displaying the beta value
const betaSlider = document.querySelector('#beta input[type="range"]');
// STEP 1d: Grab the <output> element just after the previous element
const betaValue = document.querySelector('#beta output');
// STEP 1e: Grab the <range> element inside the <dd id="gamma"> element for displaying the gamma value
const gammaSlider = document.querySelector('#gamma input[type="range"]');
// STEP 1f: Grab the <output> element just after the previous element
const gammaValue = document.querySelector('#gamma output');
// STEP 1g" Grab the <p id="status"> to output error messages, if needed
const statusMsg = document.querySelector('#status');

/* Functions
-------------------------------------------------- */

// STEP 4a: Construct the error() function
function error() {
    // STEP 4b: Output a suitable error message
    statusMsg.textContent = "Device orientation API is not supported by your browser.";
}


/* Script Logic
-------------------------------------------------- */
// STEP 2a: Check support for the DeviceOrientationEvent
if (!window.DeviceOrientationEvent) {
    // STEP 2b: Do something helpful if there is no support for the DeviceOrientationEvent
    error();
} else {
    // STEP 3a: Build an event listener for the 'deviceorientation' event, and build out 
    // an anonymous callback function, passing in the event itself
    window.addEventListener("deviceorientation", function (event) {
        console.log(event);
        // STEP 3b: Capture the alpha value (rotation) and set the textContent for the <output> element
        alphaValue.textContent = Math.round(event.alpha) + "°";
        // STEP 3c: Use the same value to update the position of the slider
        alphaSlider.value = Math.round(event.alpha);
        // STEP 3d: Capture the beta value (tilt toward/away) and set the textContent for the <output> element
        betaValue.textContent = Math.round(event.beta) + "°";
        // STEP 3e: Use the same value to update the position of the slider
        betaSlider.value = Math.round(event.beta);
        // STEP 3f: Capture the gamma value (tilt left/right) and set the textContent for the <output> element
        gammaValue.textContent = Math.round(event.gamma) + "°";
        // STEP 3g: Use the same value to update the position of the slider
        gammaSlider.value = Math.round(event.gamma);
    })
}
/* Learn more at https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent */