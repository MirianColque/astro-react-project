import React, { useState } from 'react';

const Button: React.FC = () => {
  const [count, setCount] = useState<number>(5);

  const handleClick = () => {
    setCount(count + 50);
  };

  return (
    <button 
      style={{
        padding: '10px 40px',
        fontSize: '22px',
        border: '2px solid #000',
        borderRadius: '5px',
        backgroundColor: '#f4f4f4',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      {count}
    </button>
  );
};

export default Button;
