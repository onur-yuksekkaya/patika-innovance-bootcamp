import * as yup from 'yup';

const AdminResPonseSchema = yup.object().shape({
  status: yup.string().required('Bu alanın doldurulması zorunludur. '),
  response: yup.string().required('Bu alanın doldurulması zorunludur. '),
});

export default AdminResPonseSchema;
