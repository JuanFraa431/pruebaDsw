import React from 'react';
import '../styles/CardDetail.css';

// Define la interfaz para las propiedades de CardDetail
interface CardDetailProps {
    destino: string;
    origen: string;
    precio: string;
    imagen: string;
    descripcion: string;
    duracion: string;
    equipaje: string;
}

const CardDetail: React.FC<CardDetailProps> = ({ destino, origen, precio, imagen, descripcion, duracion, equipaje }) => {
    return (
        <div className="card-detail">
            <img src={imagen} alt={destino} className="card-detail-img" />
            <div className="card-detail-body">
                <h2>{destino}</h2>
                <p className="card-detail-origen">Desde: {origen}</p>
                <div className="card-detail-info">
                    <p><strong>Descripción:</strong> {descripcion}</p>
                    <p><strong>Duración del vuelo:</strong> {duracion}</p>
                    <p><strong>Equipaje incluido:</strong> {equipaje}</p>
                </div>
                <div className="card-detail-footer">
                    <p className="price-label">Precio por persona</p>
                    <h3>${precio}</h3>
                    <p>Incluye impuestos, tasas y cargos</p>
                </div>
            </div>
        </div>
    );
};

const flightDetails: CardDetailProps = {
    destino: 'Madrid',
    origen: 'Buenos Aires',
    precio: '1.341.920',
    imagen: 'https://images.almundo.com/205/image/upload/v1568324811/home-v3/flights/photo-1483450388369-9ed95738483c.jpeg',
    descripcion: 'Disfruta de un vuelo cómodo y seguro con las mejores aerolíneas.',
    duracion: '11 horas',
    equipaje: 'Equipaje de mano y una maleta de hasta 23kg'
};

const CardDetailPage: React.FC = () => {
    return (
        <div className="container-detail">
            <CardDetail {...flightDetails} />
            <a href="#" className="back-button">Volver</a>
        </div>
    );
};

export default CardDetail;
