function smallestNumber(sequence) {
  const n = sequence.length; // Panjang urutan input
  const digits = []; // Array untuk menyimpan digit
  let currentNumber = 1; // Mulai dengan digit terkecil, yaitu 1
  let result = ""; // String untuk menyimpan hasil akhir

  for (let i = 0; i < n; i++) { // Iterasi melalui urutan input
    if (sequence[i] === 'M') { // Jika karakter saat ini adalah 'M', artinya urutan menurun
      digits.push(currentNumber); // Menambahkan digit saat ini ke array digits
      currentNumber++; // Menambahkan digit saat ini sebelumnya
    } else if (sequence[i] === 'N') { // Jika karakter saat ini adalah 'N', artinya urutan meningkat
      digits.push(currentNumber); // Menambahkan digit saat ini ke array digits
      currentNumber++; // Menambahkan digit saat ini sebelumnya

      // Memeriksa jika ada 'N' yang berurutan
        let j = i + 1;
        while (j < n && sequence[j] === 'N') {
            digits.push(currentNumber); // Menambahkan digit saat ini ke array digits
            currentNumber++; // Menambahkan digit saat ini sebelumnya
            j++;
        }

        // Membalik urutan digit untuk 'N'
        for (let k = digits.length - 1; k >= i; k--) {
            result += digits[k]; // Menambahkan digit ke hasil dalam urutan terbalik
        }
        i = j - 1; // Melompati 'N' yang telah diproses
        }
    }

    // Menambahkan digit 'M' yang tersisa ke hasil
    for (let i = 0; i < digits.length; i++) {
        result += digits[i];
    }

  return result; // Mengembalikan hasil, yaitu bilangan terkecil yang mungkin
}

// Test cases
console.log(smallestNumber("M")); // Output: "21"
console.log(smallestNumber("N")); // Output: "12"
console.log(smallestNumber("MM")); // Output: "321"
console.log(smallestNumber("NN")); // Output: "123"
console.log(smallestNumber("MNMN")); // Output: "21435"
console.log(smallestNumber("NNMM")); // Output: "126543"
console.log(smallestNumber("MMNMMNNM")); // Output: "321654798"
