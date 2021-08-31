/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminResponse } from '../service/firebase';
import AdminResPonseSchema from '../schema/AdminResPonseSchema';
import '../styles/admin-app-detail.scss';
import ApplicationDetails from './ApplicationDetails';

const AdminAppDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AdminResPonseSchema),
  });
  const onSubmit = (formData) => {
    AdminResponse(formData, id);
    history.replace({ pathname: `/admin` });
  };

  return (
    <div className="app">
      <ApplicationDetails />
      <div className="response">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <select id="status" style={{ marginBottom: '35px' }} {...register('status')}>
              <option value="Çözüldü">Çözüldü</option>
              <option value="Yanıt Bekliyor">Yanıt Bekliyor</option>
              <option value="Çözülemedi">Çözülemedi</option>
            </select>
            <p>{errors.status?.message}</p>
          </div>
          <div>
            <textarea
              data-testid="response-input"
              placeholder="Cevabınız..."
              type="text"
              {...register('response')}
              rows="15"
              cols="50"
            />
            <p>{errors.response?.message}</p>
          </div>
          <button data-testid="guncelle-button" type="submit">
            Güncelle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAppDetail;
