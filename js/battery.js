/* Variables
-------------------------------------------------- */
// STEP 1a: Grab the first <dd> element for displaying the battery charging status
const chargeStatus = document.querySelector('#battery dd:nth-of-type(1)');
// STEP 1b: Grab the <output> element inside the second <dd> element for displaying the battery charge level
const chargeLevel = document.querySelector('#battery dd:nth-of-type(2) output');
// STEP 1c: Grab the <progress> element inside the second <dd> element for a more graphical representation of the battery's state of charge (SOC)
const chargeMeter = document.querySelector('#battery dd:nth-of-type(2) progress');
// Lab04: Grab the <img> element for displaying the battery image
const chargeImage = document.querySelector('img');

/* Functions
-------------------------------------------------- */
// Lab04: 
function displayImage(battery) {
    let batteryLevel = Math.round(battery.level * 100).toFixed(0);
    const url = `https://robohash.org/${batteryLevel}.png/set_set4/bgset_bg1/?size=400x400`;
    chargeImage.src = url;
    chargeImage.alt = `Image ${batteryLevel}`;
}

// STEP 3a: Create the updateBatteryStatus() function
function updateBatteryStatus(battery) {
    // console.log(battery);
    // STEP 3b: Update the charging status
    if (battery.charging === true) {
        chargeStatus.textContent = "Charging...";
        chargeStatus.style.color = "green";
    } else {
        chargeStatus.textContent = "Discharging...";
        chargeStatus.style.color = "red";
    }
    // STEP 3c: Update the charge level
    chargeLevel.textContent = (Math.round(battery.level * 100).toFixed(0)) + "%";
    chargeMeter.value = Math.round(battery.level * 100).toFixed(0);

    // Lab04: Display image
    displayImage(battery);
}

// STEP 2a: Using the getBattery() method of the navigator object, 
//create a promise to retrieve the battery information
navigator.getBattery().then(battery => {
    // STEP 2b: See what the battery object contains
    console.log(battery);
    // STEP 3d: Update the battery information when the promise resolves
    updateBatteryStatus(battery);
    // STEP 4a: Event listener for changes to the charging status
    battery.addEventListener("chargingchange", () => {
        updateBatteryStatus(battery);
    });
    // STEP 4b: Event listener for changes to the charge level
    battery.addEventListener("levelchange", () => {
        updateBatteryStatus(battery);
    });
})

/* This script adapted from the excellent code examples found at https://www.w3.org/TR/battery-status/#examples and https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API */