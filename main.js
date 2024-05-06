function convert() {
    var from = document.getElementById('formatFrom').value;
    var to = document.getElementById('formatTo').value;
    var input = document.getElementById('inputNumber').value;
    var result = '';
    var conversionLabel = '';

    if (from === 'binary' && to === 'decimal') {
        result = parseInt(input, 2).toString(10);
        conversionLabel = 'Binary to Decimal:';
    } else if (from === 'binary' && to === 'hexadecimal') {
        result = parseInt(input, 2).toString(16).toUpperCase();
        conversionLabel = 'Binary to Hexadecimal:';
    } else if (from === 'decimal' && to === 'binary') {
        result = parseInt(input, 10).toString(2);
        conversionLabel = 'Decimal to Binary:';
    } else if (from === 'decimal' && to === 'hexadecimal') {
        result = parseInt(input, 10).toString(16).toUpperCase();
        conversionLabel = 'Decimal to Hexadecimal:';
    } else if (from === 'hexadecimal' && to === 'binary') {
        result = parseInt(input, 16).toString(2);
        conversionLabel = 'Hexadecimal to Binary:';
    } else if (from === 'hexadecimal' && to === 'decimal') {
        result = parseInt(input, 16).toString(10);
        conversionLabel = 'Hexadecimal to Decimal:';
    }

    document.getElementById('result').textContent = result;
    document.getElementById('conversionLabel').textContent = conversionLabel;
}