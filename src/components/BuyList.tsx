import React from 'react';

// Definimos los props que va a recibir el componente
interface BuyListProps {
    items: string[];
}

// El componente que recibe la lista y la renderiza
const BuyList: React.FC<BuyListProps> = ({ items }) => {
    return (
        <div>
            <h2>Compras de la semana</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default BuyList;
