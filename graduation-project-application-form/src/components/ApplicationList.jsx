import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { database } from '../service/firebase';
import '../styles/application-list.scss';

const ApplicationList = () => {
  const [application, setApplication] = useState([]);
  const history = useHistory();

  useEffect(() => {
    database.collection('application').onSnapshot((snapshot) => {
      setApplication(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const handClick = (id) => {
    history.push({ pathname: `/admin/basvuru/${id}`, state: { id } });
  };
  const statusColor = (status) => {
    switch (status) {
      case 'Yanıt Bekleniyor':
        return 'rgb(99, 99, 99)';
      case 'Çözüldü':
        return 'green';
      case 'Çözülemedi':
        return 'red';
      default:
        return 'rgb(99, 99, 99)';
    }
  };

  return (
    <div className="line">
      <div className="titles">
        <h4 data-testid="name" style={{ paddingLeft: '15px' }}>
          Adı
        </h4>
        <h4 data-testid="lastname">Soyadı</h4>
        <h4 data-testid="category">Kategori</h4>
        <h4 data-testid="status">Durumu</h4>
        <h4>İşlemler</h4>
      </div>
      {application.map(({ status, reason, firstName, lastName, id }) => (
        <table key={id}>
          <tbody key={id}>
            <tr className="column" key={id}>
              <td style={{ paddingLeft: '15px' }}>{firstName}</td>
              <td>{lastName}</td>
              <td>{reason}</td>
              <td style={{ color: `${statusColor(status)}` }}>{status}</td>
              <td>
                <button data-testid="button" type="button" onClick={() => handClick(id)}>
                  İşlem Yap
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default ApplicationList;
