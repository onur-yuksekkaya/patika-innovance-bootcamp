import React from 'react';
import { useParams } from 'react-router-dom';
import card from '../assets/img/encard.png';
import '../styles/successful.scss';
import ApplicationDetails from './ApplicationDetails';

const Success = () => {
  const { id } = useParams();

  return (
    <div className="success">
      <h3>Sorununuzu bizle paylaştığınız için teşekkür ederiz</h3>
      <div className="text">
        <div data-testid="message">
          <h3>Başvurunuz alınmıştır...</h3>
          <p>
            Size en kısa sürede geri dönüş yapılacaktır , başvuru bilgilerinizi aşşğıda
            bulabilirsiniz.Lütfen başvuru numaranızı saklayınız. Başvuru Numaranız:
            <span style={{ fontWeight: 'bold' }}> {id}</span>
          </p>
        </div>
        <img data-testid="img" src={card} alt="card" />
      </div>
      <ApplicationDetails />
    </div>
  );
};

export default Success;
