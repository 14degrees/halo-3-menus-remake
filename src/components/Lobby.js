import React, { useState } from 'react';
import SwitchLobby from './SwitchLobby';

// shared layout for the multiplayer / custom games / forge / theater lobbies
export default function Lobby({ lobby, switchLobby }) {
  const [activePanel, setActivePanel] = useState(null);

  const handleMenuClick = (label) =>
    setActivePanel((prev) => (prev === label ? null : label));

  return (
    <>
      {/* background vid */}
      <video
        src={lobby.video}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1'
        }}
      />

      <div className="homeMenu" style={{ position: 'fixed' }}>
        <h1 style={{ color: 'white', marginLeft: 10 }}>{lobby.title}</h1>

        {lobby.items.map((label, index) => (
          <div
            key={index}
            className="item-text"
            onClick={() => handleMenuClick(label)}
            style={{ cursor: 'pointer', color: activePanel === label ? '#ffffffff' : '' }}
          >
            {label}
          </div>
        ))}

        <div style={{ color: '#8094B4', padding: 10 }}>
          Ready
          <br />
          This party is open to friends and recent players
        </div>

        <img src={lobby.image} alt={lobby.title} style={{ width: '95%', marginLeft: 10 }} />
        <div style={{ color: '#8094B4', padding: 10 }}>{lobby.status}</div>
      </div>

      <div style={{ marginTop: '10%' }}>
        {activePanel === 'SWITCH LOBBY' && <SwitchLobby items={switchLobby} />}
      </div>
    </>
  );
}
