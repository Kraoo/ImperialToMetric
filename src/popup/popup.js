document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convertButton').addEventListener('click', convertUnits);
});

function convertUnits() {
    const input = document.getElementById('inputValue').value;
    const unit = document.getElementById('unitSelect').value;
    let result = '';

    if (input && !isNaN(input)) {
        const value = parseFloat(input);
        switch (unit) {
            case 'cups':
                result = `${value} cups = ${(value * 240).toFixed(2)} ml<br>${(value * 0.24).toFixed(2)} liters<br>${(value * 240).toFixed(2)} grams`;
                break;
            case 'fl_oz':
                result = `${value} fl oz = ${(value * 29.5735).toFixed(2)} ml<br>${(value * 0.0295735).toFixed(2)} liters`;
                break;
            case 'oz':
                result = `${value} oz = ${(value * 28.3495).toFixed(2)} grams<br>${(value * 0.0283495).toFixed(2)} kilograms`;
                break;
            case 'pounds':
                result = `${value} pounds = ${(value * 453.592).toFixed(2)} grams<br>${(value * 0.453592).toFixed(2)} kilograms`;
                break;
            case 'quarts':
                result = `${value} quarts = ${(value * 946.353).toFixed(2)} ml<br>${(value * 0.946353).toFixed(2)} liters`;
                break;
            case 'gallons':
                result = `${value} gallons = ${(value * 3785.41).toFixed(2)} ml<br>${(value * 3.78541).toFixed(2)} liters`;
                break;
            default:
                result = 'Please select a valid unit';
        }
    } else {
        result = 'Please enter a valid number';
    }

    document.getElementById('result').innerHTML = result;
}