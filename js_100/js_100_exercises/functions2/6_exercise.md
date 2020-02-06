
### Calculate BMI

Question:

Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

Answer:

```javascript
function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);
}

calculateBMI(180, 80); // 24.69
```