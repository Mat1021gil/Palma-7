
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [song, setSong] = useState('');
  const [requests, setRequests] = useState([]);

  const handleRequest = () => {
    if (song.trim() === '') return;
    setRequests([...requests, song]);
    setSong('');
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#111', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}
      >
        🎵 Jukebox de La Palma 🍻
      </motion.h1>

      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#222', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
        <input
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '0.5rem', color: '#000' }}
          placeholder="Escribe el nombre de una canción o artista"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <button
          onClick={handleRequest}
          style={{ width: '100%', backgroundColor: '#22c55e', color: '#fff', fontWeight: 'bold', padding: '0.5rem', borderRadius: '0.5rem' }}
        >
          Solicitar canción
        </button>
      </div>

      {requests.length > 0 && (
        <div style={{ marginTop: '2rem', width: '100%', maxWidth: '400px' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '600', textAlign: 'center' }}>Solicitudes:</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {requests.map((req, idx) => (
              <li
                key={idx}
                style={{ backgroundColor: '#222', padding: '0.75rem 1rem', borderRadius: '0.75rem', marginBottom: '0.5rem' }}
              >
                {req}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
