let batas: number = 81 + 10; //91
let hasil: number[] = [];

for (let angka = 2; angka <= batas; angka++) {
  let prima: boolean = true;

  for (let i = 2; i < angka; i++) {
    if (angka % i === 0) {
      prima = false;
      break;
    }
  }

  if (prima) {
    hasil.push(angka);
  }
}

console.log(hasil.join(", "));
