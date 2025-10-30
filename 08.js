class ValidasiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidasiError";
  }
}

class Mahasiswa {
  constructor(nama, nim, kelas) {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
  }

  validasiData() {
    if (!this.nama || !this.nim || !this.kelas) {
      throw new ValidasiError("Data mahasiswa tidak boleh kosong.");
    }

    if (String(this.nim).length < 8) {
      throw new ValidasiError("NIM terlalu pendek! Minimal 8 karakter.");
    }

    return "Data mahasiswa valid.";
  }

  // Method untuk menampilkan data
  tampilkanData() {
    console.log("=== Data Mahasiswa ===");
    console.log("Nama : " + this.nama);
    console.log("NIM  : " + this.nim);
    console.log("Kelas: " + this.kelas);
    console.log("======================\n");
  }
}

// --- 3. Try pertama: data lengkap ---
try {
  const mhs1 = new Mahasiswa("Zeinieah", "20240110056", "IP241");
  console.log(mhs1.validasiData());
  mhs1.tampilkanData();
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
} finally {
  console.log("Proses mahasiswa 1 selesai.\n");
}

// --- 4. Try kedua: nama kosong ---
try {
  const mhs2 = new Mahasiswa("", "2310510022", "IM241");
  console.log(mhs2.validasiData());
  mhs2.tampilkanData();
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
} finally {
  console.log("Proses mahasiswa 2 selesai.\n");
}

// --- 5. Try ketiga: NIM pendek ---
try {
  const mhs3 = new Mahasiswa("Dinda", "12345", "IK241");
  console.log(mhs3.validasiData());
  mhs3.tampilkanData();
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
} finally {
  console.log("Proses mahasiswa 3 selesai.\n");
}
