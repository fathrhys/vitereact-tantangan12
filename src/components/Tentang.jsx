import React from 'react';
import Profile from './Profile.jsx'; // Impor cetakan Profile yang sudah kita buat

// Ini adalah data untuk 3 orang anggota kelompok
// GANTI NAMA, GAMBAR, DAN INFO SESUAI KEBUTUHAN ANDA
const dataAnggota = [
  {
    id: 1,
    nama: 'Ahmad Fadhil Fathi RN',
    gambar: '/profil-ahmad.jpg', // NAMA FILE GAMBAR ORANG PERTAMA
    info1: 'SISWA SIJA',
    info2: 'Bertugas sebagai Backend Developer'
  },
  {
    id: 2,
    nama: 'Bima Aji Ariqin',
    gambar: '/profil-bima.png', // NAMA FILE GAMBAR ORANG KEDUA
    info1: 'SISWA SIJA',
    info2: 'Bertugas sebagai Backend Developer'
  },
  {
    id: 3,
    nama: 'Rajindra Sangkabatara',
    gambar: '/profil-rajindra.jpg', // NAMA FILE GAMBAR ORANG KETIGA
    info1: 'Siswa DKV',
    info2: 'Bertugas sebagai Backend Developer'
  }
];

function Tentang() {
  return (
    <div>
      <h1>Tim Kami</h1>
      <div className="profile-container">
        {/* Looping data anggota dan membuat komponen Profile untuk setiap anggota */}
        {dataAnggota.map(anggota => (
          <Profile
            key={anggota.id}
            nama={anggota.nama}
            gambar={anggota.gambar}
            info1={anggota.info1}
            info2={anggota.info2}
          />
        ))}
      </div>
    </div>
  );
}

export default Tentang;