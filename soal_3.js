// Mendefinisikan fungsi findMinBottles dengan parameter primeBottles (daftar botol kapasitas prima) dan target (kapasitas yang ingin dicapai)
function findMinBottles(primeBottles, target) {
  // Mendapatkan jumlah botol kapasitas prima yang tersedia
  const n = primeBottles.length;
  
  // Membuat sebuah array dp untuk menyimpan jumlah botol minimum yang diperlukan untuk setiap kapasitas dari 0 hingga target
  // Awalnya, diisi dengan Infinity untuk semua kapasitas kecuali 0
  const dp = new Array(target + 1).fill(Infinity);
  
  // Membuat array usedBottles untuk melacak botol mana yang digunakan untuk setiap kapasitas
  const usedBottles = new Array(n).fill(0);

  // Inisialisasi dp[0] sebagai 0, karena tidak diperlukan botol untuk mencapai kapasitas 0
  dp[0] = 0;

  // Looping melalui setiap botol kapasitas prima
  for (let i = 0; i < n; i++) {
    // Looping melalui setiap kapasitas mulai dari kapasitas botol ini hingga target
    for (let j = primeBottles[i]; j <= target; j++) {
      // Jika menggunakan botol ini akan menghasilkan jumlah botol yang lebih sedikit dari sebelumnya,
      // maka perbarui dp[j] dengan jumlah yang lebih kecil dan catat botol yang digunakan (usedBottles)
      if (dp[j - primeBottles[i]] + 1 < dp[j]) {
        dp[j] = dp[j - primeBottles[i]] + 1;
        usedBottles[j] = i;
      }
    }
  }

  // Membuat array result untuk menyimpan jumlah botol yang digunakan dari setiap jenis botol
  const result = new Array(n).fill(0);
  let remaining = target;

  // Melakukan backtrack untuk menentukan jenis botol yang digunakan untuk mencapai target
  while (remaining > 0) {
    const bottleIndex = usedBottles[remaining];
    result[bottleIndex]++;
    remaining -= primeBottles[bottleIndex];
  }

  // Mengembalikan array result yang berisi jumlah botol dari setiap jenis botol yang digunakan
  return result;
}

// Daftar botol kapasitas prima antara 0 dan 30 liter
const primeBottles = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// Tes dengan input X = 100
const target = 100;
const result = findMinBottles(primeBottles, target);

// Menampilkan hasil
console.log("Botol Kapasitas:");
result.forEach((count, index) => {
  if (count > 0) {
    console.log(`Botol ${primeBottles[index]} = ${count} botol`);
  }
});
