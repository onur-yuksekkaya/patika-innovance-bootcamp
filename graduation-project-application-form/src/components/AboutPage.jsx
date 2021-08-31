import React from 'react';
import { Link } from 'react-router-dom';
import musteri from '../assets/img/musteri.jpg';
import '../styles/about.scss';
import '../styles/button.scss';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="text-side">
        <h3>Bankadan Güzeli Enpara.com</h3>
        <p>
          Enpara ile ilgili şikayet ve görüşlerinizi bizlerle bu sayfa üzerinden paylaşabilirsiniz.
          2-3 iş günü içerisinde şikayet taleplerinize geri dönüş yapılacaktır. Başvuru durumunuzu
          sonrasında öğrenebilmek için lütfen başvuru yaptıktan sonra size verilecek numarayı
          başvuru sorgula bölümünden öğrenebilirsiniz. Formdaki tüm verileri eksiksiz doldurmayı
          lütfen unutmayınız.
        </p>
        <div className="buttons">
          <Link to="/application">
            <button data-testid="basvuru-olustur" type="button">
              Başvuru Oluştur
            </button>
          </Link>
          yada
          <Link to="/application">
            <button data-testid="basvuru-sorgula" type="button">
              Başvuru Sorgula
            </button>
          </Link>
        </div>
      </div>
      <img src={musteri} alt="consultant" />
    </div>
  );
};

export default AboutPage;
