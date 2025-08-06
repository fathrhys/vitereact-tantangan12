import React, { useState } from 'react';
import Home from './components/Home';
import Tentang from './components/Tentang';
import Kontak from './components/Kontak';

function App() {
  // State untuk melacak halaman yang sedang aktif
  const [halamanAktif, setHalamanAktif] = useState('home');

  // Fungsi untuk merender komponen berdasarkan state halamanAktif
  const renderHalaman = () => {
    if (halamanAktif === 'home') {
      return <Home />;
    } else if (halamanAktif === 'tentang') {
      return <Tentang />;
    } else if (halamanAktif === 'kontak') {
      return <Kontak />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setHalamanAktif('home')}>Home</button>
        <button onClick={() => setHalamanAktif('tentang')}>Tentang</button>
        <button onClick={() => setHalamanAktif('kontak')}>Kontak</button>
      </nav>
      <hr />
      <main>
        {renderHalaman()}
      </main>
    </div>
  );
}

export default App;