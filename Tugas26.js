function tugas26() {
  var numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  for(i=0; i<numbers.length; i++){

    if (isFinite(numbers[i]===false)) {
      console.log("Angka", String(numbers[i]), "NOT Infinity")
    }
    else {
      console.log("Angka", String(numbers[i]), "Infinity")
    }
  }
}

tugas26();
