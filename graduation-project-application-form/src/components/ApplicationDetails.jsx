import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAppData } from '../service/firebase';
import '../styles/admin-app-detail.scss';

const ApplicationDetails = () => {
  const { id } = useParams();
  const [appInfo, setAppInfo] = useState({});

  useEffect(() => {
    getAppData(id).then((data) => {
      if (data) setAppInfo(data);
    });
  }, []);
  return (
    <div className="app">
      <div className="app-info">
        <h3 data-testid="status">
          Başvuru Durumunu : <span>{appInfo.status}</span>
        </h3>
        <p data-testid="name">
          Adı: <span>{appInfo.firstName}</span>
        </p>
        <p>
          Soyadı: <span>{appInfo.lastName}</span>
        </p>
        <p>
          Adresi: <span>{appInfo.address}</span>
        </p>
        <p>
          Yaşı: <span>{appInfo.age}</span>
        </p>
        <p>
          TC Kimlik Numarası: <span>{appInfo.tcno}</span>
        </p>
        <p>
          Kategori: <span>{appInfo.reason}</span>
        </p>
        <p>
          Detay Mesajı: <span>{appInfo.details}</span>
        </p>
        <p>
          {appInfo.file && (
            <p>
              Ekler: <span>{appInfo.file}</span>
            </p>
          )}
        </p>
        {appInfo.message && (
          <p>
            Yanıtınız: <span>{appInfo.message}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetails;
