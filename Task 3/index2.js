const converterForm = document.getElementById('converter-form');
const temperatureInput = document.getElementById('temperature');
const unitFromSelect = document.getElementById('unit-from');
const unitToSelect = document.getElementById('unit-to');
const resultDiv = document.getElementById('result');

converterForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const temperature = parseFloat(temperatureInput.value);

	if (isNaN(temperature)) {
		resultDiv.textContent = "Please enter a valid temperature";
		return;
	}

	const unitFrom = unitFromSelect.value;
	const unitTo = unitToSelect.value;
	const convertedTemperature = convertTemperature(temperature, unitFrom, unitTo);
	resultDiv.textContent = `${temperature} ${unitFrom} = ${convertedTemperature}`;
});

function convertTemperature(temperature, unitFrom, unitTo) {
	if (unitFrom === "Celsius" && unitTo === "Fahrenheit") {
		return (temperature * 9/5 + 32).toFixed(2) + " °F";
	} else if (unitFrom === "Fahrenheit" && unitTo === "Celsius") {
		return ((temperature - 32) * 5/9).toFixed(2) + " °C";
	} else if (unitFrom === "Celsius" && unitTo === "Kelvin") {
		return (temperature + 273.15).toFixed(2) + " K";
