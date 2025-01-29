function convertToMetric(value, unit) {
    const conversions = {
        'cups': value * 236.588,
        'fl oz': value * 29.5735,
        'oz': value * 28.3495,
        'pounds': value * 453.592,
        'quarts': value * 946.353,
        'gallons': value * 3785.41
    };

    return conversions[unit] || value;
}

function convertUnits() {
    const elements = document.querySelectorAll('.imperial-unit');
    elements.forEach(element => {
        const value = parseFloat(element.textContent);
        const unit = element.dataset.unit;
        if (!isNaN(value) && unit) {
            const metricValue = convertToMetric(value, unit);
            element.textContent = `${metricValue.toFixed(2)} metric units`;
        }
    });
}

convertUnits();