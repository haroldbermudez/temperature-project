<script>

function calculate(key) {
    var cel = "celsius";
    var fah = "Fahrenheit";

    if (key == 'c') {
        cel = document.getElementById("degreesCelsius").value;
        far = (cel * 1.8) + 32;

        if (isNaN(far)){
            document.getElementById("degreesFahrenheit").value = "Invalid number"
        }
        else {
            document.getElementById("degreesFahrenheit").value = far;
        }

    }
    else {
        far = document.getElementById("degreesFahrenheit").value;
        cel = (far - 32) * 5 / 9;

        document.getElementById("degreesCelsius").value = cel;

        if (isNaN(far)){
            document.getElementById("degreesCelsius").value = "Invalid number"
        }
        else {
            document.getElementById("degreesCelsius").value = far;
        }
    }


}

</script>/**
 * Created by harold.bermudez421 on 10/21/16.
 */
