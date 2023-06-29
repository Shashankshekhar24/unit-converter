function convert() {
    // Get user input
    var value = parseFloat(document.getElementById("valueInput").value);
    var fromUnit = document.getElementById("fromSelect").value;
    var toUnit = document.getElementById("toSelect").value;

    // Perform conversion
    var result;
    if (fromUnit === "cm" && toUnit === "inch") {
      result = value / 2.54;
    } else if (fromUnit === "inch" && toUnit === "cm") {
      result = value * 2.54;
    } else if (fromUnit === "cm" && toUnit === "m") {
      result = value / 100;
    } else if (fromUnit === "m" && toUnit === "cm") {
      result = value * 100;
    } else if (fromUnit === "inch" && toUnit === "m") {
      result = value * 0.0254;
    } else if (fromUnit === "m" && toUnit === "inch") {
      result = value * 39.37;
    } else {
      result = value;
    }

    // Display result
    document.getElementById("result").textContent = result.toFixed(2);
  }