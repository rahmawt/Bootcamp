function hitungBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Mohon di isi dengan benar.";
    return;
  }
  var bmi = weight / (height / 100) ** 2;
  var category = "";

  if (bmi < 18.5) {
    category = "kurang";
  } else if (bmi < 24.9) {
    category = "normal";
  } else if (bmi < 29.9) {
    category = "berlebih";
  } else {
    category = "obesitas";
  }
  resultDiv.innerHTML =
    "BMI kamu " + bmi.toFixed(2) + ", berat badan kamu " + category;
}

function hitungBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Eitss.. ada yang belum di isi";
    return;
  }
  var bmi = weight / (height / 100) ** 2;
  var category = "";

  if (bmi < 18.5) {
    category = "kurang";
  } else if (bmi < 24.9) {
    category = "normal";
  } else if (bmi < 29.9) {
    category = "berlebih";
  } else {
    category = "obesitas";
  }
  resultDiv.innerHTML =
    "BMI kamu " + bmi.toFixed(2) + ", berat badan kamu  " + category;
}
