/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerApplication } from '../service/firebase';
import schema from '../schema/Schema';
import '../styles/input.scss';
import '../styles/form.scss';

const ApplicationForm = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    registerApplication(data).then((appId) => {
      history.replace({ pathname: `/basvuru-basarili/${appId}` });
    });
  };

  return (
    <div className="form">
      <h3>Lütfen Formu Eksiksiz Doldurunuz...</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input data-testid="name" placeholder="Adınız" type="text" {...register('firstName')} />
          <p>{errors.firstName?.message}</p>
        </div>
        <div>
          <input
            data-testid="lastname"
            placeholder="Soyadınız"
            type="text"
            {...register('lastName')}
          />
          <p>{errors.lastName?.message}</p>
        </div>
        <div>
          <input data-testid="age" placeholder="Yaşınız" type="number" {...register('age')} />
          <p>{errors.age?.message}</p>
        </div>
        <div>
          <input placeholder="TC Kimlik Numaranız" type="number" {...register('tcno')} />
          <p>{errors.tcno?.message}</p>
        </div>
        <div>
          <select style={{ marginBottom: '35px' }} {...register('reason')}>
            <option value="Kredi Kartı">Kredi Kartı</option>
            <option value="Banka Kartı">Banka Kartı</option>
            <option value="Kredi">Kredi</option>
            <option value="Başka Bir Sebep">Başka Bir Sebeb</option>
          </select>
        </div>
        <div>
          <input type="file" {...register('file')} style={{ marginBottom: '35px' }} />
          <p>{errors.file?.message}</p>
        </div>
        <div>
          <textarea placeholder="Detaylı Mesajınız" type="text" {...register('details')} />
          <p>{errors.details?.message}</p>
        </div>
        <div>
          <textarea
            data-testid="address"
            placeholder="Adresiniz"
            type="text"
            {...register('address')}
          />
          <p>{errors.address?.message}</p>
        </div>

        <button data-testid="button" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
