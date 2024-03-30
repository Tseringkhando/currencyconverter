function convert() {
    // Get USD amount
    let usdAmount = parseFloat(document.getElementById('usd-amount').value);

    // Validate input
    if (isNaN(usdAmount) || usdAmount < 0) {
        alert("Please enter a valid USD amount.");
        return;
    }

    // Convert USD to CAD (hardcoded rate)
    let cadResult = usdAmount * 1.25;
    cadResult = cadResult.toFixed(3); // Round to 3 decimal places

    // Display result in the CAD amount form
    document.getElementById('cad-amount').value = cadResult;
}
