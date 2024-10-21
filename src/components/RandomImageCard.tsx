import { useState, useEffect } from 'react';

const URL_RANDOM_AVATAR = 'https://avatars.dicebear.com/api/micah/:seed.svg';

const RandomImageCard = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    // Genera una URL aleatoria para el avatar
    const seed = Math.random().toString(36).substring(7); // genera un valor aleatorio
    const avatar = URL_RANDOM_AVATAR.replace(':seed', seed);
    setAvatarUrl(avatar);
  }, []);

  return (
    <div style={styles.card}>
      <h1>Random Image</h1>
      <img src={avatarUrl} alt="Avatar aleatorio" style={styles.avatar} />
      <h2>Descripcion:</h2>
      <p>Colocar alguna descripcion para los personajes</p>
    </div>
  );
};

const styles = {
    card: {
      width: '350px',
      height: '400px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center' as 'center', // Tipado CSS específico
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '0 auto', // Centrar la tarjeta
    },
    avatar: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      margin: '20px auto',
    },
  };
  

export default RandomImageCard;
