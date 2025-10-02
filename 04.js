class Mahasiswa {
    constructor(nama, nim, kelas, jurusan, ips, ipk) {
        this.nama = nama;
        this.nim = nim;

        // simpan private pakai closure
        let _kelas = kelas;
        let _jurusan = jurusan;
        let _ips = ips;
        let _ipk = ipk;

        // getter & setter untuk kelas
        this.ambilKelas = function () {
            return _kelas;
        };
        this.ubahKelas = function (kelasBaru) {
            _kelas = kelasBaru;
        };

        // getter & setter untuk jurusan
        this.ambilJurusan = function () {
            return _jurusan;
        };
        this.ubahJurusan = function (jurusanBaru) {
            _jurusan = jurusanBaru;
        };

        // getter & setter untuk IPS
        this.ambilIps = function () {
            return _ips;
        };
        this.ubahIps = function (ipsBaru) {
            if (ipsBaru >= 0.0 && ipsBaru <= 4.0) {
                _ips = ipsBaru;
            } else {
                console.log("IPS harus antara 0.0 dan 4.0!");
            }
        };

        // getter & setter untuk IPK
        this.ambilIpk = function () {
            return _ipk;
        };
        this.ubahIpk = function (ipkBaru) {
            if (ipkBaru >= 0.0 && ipkBaru <= 4.0) {
                _ipk = ipkBaru;
            } else {
                console.log("IPK harus antara 0.0 dan 4.0!");
            }
        };
    }
}

// Buat beberapa objek mahasiswa
let mhs1 = new Mahasiswa("Anita", "12345", "IP241", "Teknik Informatika", 3.75, 3.25);
let mhs2 = new Mahasiswa("Nayla", "67890", "SP241", "Sistem Informasi", 3.83, 3.88);

// Tampilkan data awal
console.log("Data Mahasiswa 1:");
console.log("Nama:", mhs1.nama);
console.log("NIM:", mhs1.nim);
console.log("Kelas:", mhs1.ambilKelas());
console.log("Jurusan:", mhs1.ambilJurusan());
console.log("IPS:", mhs1.ambilIps());
console.log("IPK:", mhs1.ambilIpk());

console.log("\nData Mahasiswa 2:");
console.log("Nama:", mhs2.nama);
console.log("NIM:", mhs2.nim);
console.log("Kelas:", mhs2.ambilKelas());
console.log("Jurusan:", mhs2.ambilJurusan());
console.log("IPS:", mhs2.ambilIps());
console.log("IPK:", mhs2.ambilIpk());

// Ubah sebagian data
mhs1.ubahKelas("IK241");
mhs1.ubahIps(3.6);
mhs2.ubahJurusan("Teknik Informatika");
mhs2.ubahIpk(3.9);

// Tampilkan setelah diubah
console.log("\nSetelah diubah:");
console.log(mhs1.nama, mhs1.nim, mhs1.ambilKelas(), mhs1.ambilJurusan(), "IPS:", mhs1.ambilIps(), "IPK:", mhs1.ambilIpk());
console.log(mhs2.nama, mhs2.nim, mhs2.ambilKelas(), mhs2.ambilJurusan(), "IPS:", mhs2.ambilIps(), "IPK:", mhs2.ambilIpk());
