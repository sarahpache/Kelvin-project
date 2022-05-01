<script>

// The forecast for today is 293 Kelvin. Variable Kelvin will stay constant.
const kelvin = 293;

// Converting kelvin to celsius by subtracting 273 from kelvin and creating a new variable celsius
var celsius = kelvin-273;

console.log('celsius', celsius)

// Converting celsius (20) to fahrenheit (68)

var fahrenheit = (celsius * 1.8) + 32;

console.log('Fahrenheit', fahrenheit)

//Rounding down fahrenheit result (68), but it is already an even number

console.log('Round Down', Math.floor(fahrenheit));

// Reassign Fahrenheit to the rounded down number

fahrenheit = (Math.floor(fahrenheit));

console.log('Revised Fahrenheit', fahrenheit);

// Using string interpolation to state the temperature "The temperature is TEMPERATURE degrees Fahrenheit.""

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

</script>

