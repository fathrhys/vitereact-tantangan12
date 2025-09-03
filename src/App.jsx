import React, { useState } from 'react';

// Impor semua komponen yang akan kita gunakan
import Home from './components/Home.jsx';
import Tentang from './components/Tentang.jsx'; // DIUBAH: Sekarang mengimpor Tentang.jsx
import Kontak from './components/Kontak.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [halamanAktif, setHalamanAktif] = useState('home');
  const [tema, setTema] = useState('terang');

  const toggleTema = () => {
    setTema(tema === 'terang' ? 'gelap' : 'terang');
  };

  const renderHalaman = () => {
    if (halamanAktif === 'tentang') {
      return <Tentang />; // DIUBAH: Sekarang merender komponen Tentang
    }
    if (halamanAktif === 'kontak') {
      return <Kontak />;
    }
    return <Home />;
  };

  return (
    <div className={`app-container ${tema}`}>
      <nav>
        <button onClick={() => setHalamanAktif('home')}>Home</button>
        <button onClick={() => setHalamanAktif('tentang')}>Tentang</button>
        <button onClick={() => setHalamanAktif('kontak')}>Kontak</button>
        <button onClick={toggleTema}>Ganti Tema</button>
      </nav>
      <hr />
      
      <main>
        {renderHalaman()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;