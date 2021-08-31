import * as yup from 'yup';

const StatusSchema = yup.object().shape({
  appno: yup.string().required('Bu alanın doldurulması zorunludur. '),
});

export default StatusSchema;
