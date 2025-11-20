// Nama: Zeinieah Amilia Putri
// NIM: 202401110056
// Kelas: IP241

let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Citra");
mahasiswa.set("002", "Citra");
console.log(mahasiswa.get("001"));
console.log(mahasiswa.get("002"));
console.log(mahasiswa.get("003")); // Output:  Andi, Citra, Citra

function printItems(items) {
 items.forEach(item => console.log(item));
}
printItems([1, 2, 3]); // Output: 1, 2, 3
printItems(["A", "B", "C"]); // Output: A, B, C
printItems([1, 2, 3, "A", "B", "C"]); // Output: 1, 2, 3, A, B, C

mahasiswa.set("22001", { nama: "Andi", jurusan: "Informatika" });
mahasiswa.set("22002", { nama: "Budi", jurusan: "Sistem Informasi" });
console.log(mahasiswa.get("22001").nama); // Output: Andi

let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP "); // Menggunakan Spasi
console.log(tugas); // Output: { 'Belajar OOP', 'Mengerjakan Tugas', 'Belajar OOP '}

// Data transaksi dalam bentuk array of objects
 let transaksi = [
 { user: "Andi", jumlah: 50000, kategori: "Makanan" },
 { user: "Budi", jumlah: 75000, kategori: "Transportasi" },
 { user: "Andi", jumlah: 20000, kategori: "Minuman" },
 { user: "Citra", jumlah: 100000, kategori: "Belanja" },
 { user: "Budi", jumlah: 50000, kategori: "Makanan" }
];

// Analisis: Total pengeluaran per user
 let totalPerUser = {};
 transaksi.forEach(trx => {
 if (!totalPerUser[trx.user]) {
 totalPerUser[trx.user] = 0;
 }
 totalPerUser[trx.user] += trx.jumlah;
 });
 console.log(totalPerUser);
 // Output: { Andi: 70000, Budi: 125000, Citra: 100000 }
