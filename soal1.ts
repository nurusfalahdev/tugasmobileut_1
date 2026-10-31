let nim: string = "052727589";
// console.log(nim.length);

let tinggi: number = Number(nim[nim.length - 1]); //1
// console.log(tinggi);

// 1 kurang/ sama dari 9 = kurang, maka i + 1 = 2
// for pertama menentukan baris
// for kedua menentukan angka dari kiri ke kanan
for (let i = 1; i <= tinggi; i++) {
  let baris: string = "";
  for (let j = 1; j <= i; j++) {
    baris += j + " ";
  }
  console.log(baris);
}
