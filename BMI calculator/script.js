document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.container');
    container.classList.add('active'); // Add class to trigger animation
  });
  
  function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight)) {
      document.getElementById('result').innerHTML = "Please enter valid values for height and weight.";
      return;
    }
    
    var bmi = weight / ((height / 100) * (height / 100));
    var bmiResult = "Your BMI is: " + bmi.toFixed(2);
    
    if (bmi < 18.5) {
      bmiResult += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiResult += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 30) {
      bmiResult += " (Overweight)";
    } else {
      bmiResult += " (Obese)";
    }
    
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = bmiResult;
    resultElement.classList.add('resultAnimation'); // Add class to trigger animation
  }
  