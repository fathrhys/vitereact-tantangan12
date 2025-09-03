// Asal Logika: Kelompok lain (my-app/src/InputNama.jsx)
import React, { useState } from 'react';

function Kontak() {
  const [nama, setNama] = useState('');

  return (
    <div>
      <h2>Halaman Kontak</h2>
      <p>Silakan tinggalkan nama Anda di bawah ini.</p>
      
      <div className="input-nama-container">
        <input
          type="text"
          placeholder="Ketik nama kamu..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="nama-input"
        />
        <p className="greeting">
          {nama ? `Halo, ${nama}! Senang bertemu denganmu!` : "Tuliskan nama kamu di atas"}
        </p>
      </div>
    </div>
  );
}

export default Kontak;