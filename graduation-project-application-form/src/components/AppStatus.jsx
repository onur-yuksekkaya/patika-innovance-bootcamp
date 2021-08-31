/* eslint-disable no-else-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import StatusSchema from '../schema/StatusSchema';
import { getAppData } from '../service/firebase';
import '../styles/status-detail.scss';

const AppStatus = () => {
  const [docError, showDocError] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(StatusSchema),
  });

  const checkAppStatus = (formData) => {
    getAppData(formData.appno).then((data) => {
      if (data) {
        const successId = data.appno;
        history.push({ pathname: `/app-status/${formData.appno}`, state: { successId } });
      } else showDocError(true);
    });
  };

  return (
    <div className="app-status">
      <div className="form">
        <h3 data-testid="title">Başvuru numaranızı giriniz...</h3>
        <form onSubmit={handleSubmit(checkAppStatus)}>
          <input
            data-testid="input"
            placeholder="Başvuru Numaranız..."
            type="text"
            {...register('appno')}
          />
          <p>{errors.appno?.message}</p>
          <div>
            {docError && <span style={{ color: 'red' }}>Böyle Bir Başvuru bulunamadı</span>}
          </div>
          <button data-testid="button" type="submit" style={{ marginTop: '25px' }}>
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};
export default AppStatus;
