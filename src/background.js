chrome.runtime.onInstalled.addListener(() => {
    console.log("Imperial to Metric Extension installed.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "convert") {
        const result = convertUnits(request.value, request.unit);
        sendResponse({ result: result });
    }
});

function convertUnits(value, unit) {
    const conversions = {
        cups: value * 0.236588,
        'fl oz': value * 0.0295735,
        oz: value * 0.0283495,
        pounds: value * 0.453592,
        quarts: value * 0.946353,
        gallons: value * 3.78541
    };

    return conversions[unit] || value;
}
