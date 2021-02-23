const carSpeedInKmH = 10;
const distanceObjectiveInKm = 70;
const hoursOfGas = 6;

const totalDistance = carSpeedInKmH * hoursOfGas;

if (totalDistance >= distanceObjectiveInKm) {
    console.log("WE REACH THE TARGET");
} else {
    console.log("WE DON'T REACH THE TARGET");
}