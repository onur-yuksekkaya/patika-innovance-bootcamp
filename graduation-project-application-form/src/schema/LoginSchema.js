import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  username: yup.string().required('Bu alanın doldurulması zorunludur. '),
  password: yup.string().required('Bu alanın doldurulması zorunludur. '),
});

export default LoginSchema;
