function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;
  
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
      result = (inputTemp * 9/5) + 32;
    } else if (inputUnit === 'celsius' && outputUnit === 'Kelvin') {
      result = inputTemp + 273.15;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        result = (inputTemp - 32) * 5/9;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'Kelvin') {
        result = (inputTemp - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'celsius') {
        result = inputTemp - 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'fahrenheit') {
        result = (inputTemp - 273.15) * 9/5 + 32;
    } else {
        result = inputTemp;
    }
  
    document.getElementById('outputTemp').textContent = `Converted Temperature: ${result.toFixed(2)} ${outputUnit}`;
  }
  