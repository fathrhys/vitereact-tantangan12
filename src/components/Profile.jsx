// Asal Kode: Kelompok lain (profile-app/src/Profile.jsx)
// MODIFIKASI: Komponen ini sekarang menerima 'props' (properties)
// seperti 'gambar', 'nama', dan 'info' agar bisa digunakan ulang.

import React from 'react';

function Profile(props) {
  return (
    <div className="profile-card">
      <img
        src={props.gambar} // Data gambar diambil dari props
        alt={`Foto ${props.nama}`}
        className="profile-img"
      />
      <h2 className="profile-name">{props.nama}</h2> {/* Data nama diambil dari props */}
      <p className="profile-info">{props.info1}</p> {/* Data info diambil dari props */}
      <p className="profile-info">{props.info2}</p> {/* Data info diambil dari props */}
    </div>
  );
};

export default Profile;