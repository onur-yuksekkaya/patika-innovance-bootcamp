import * as yup from 'yup';

const numberMatcher = /^[0-9]+$/;

const schema = yup.object().shape({
  firstName: yup.string().required('Bu alanın doldurulması zorunludur. '),
  lastName: yup.string().required('Bu alanın doldurulması zorunludur. '),
  age: yup
    .number()
    .typeError('Bir sayı girmelisiniz')
    .required('Bu alanın doldurulması zorunludur. ')
    .min(16)
    .max(120),
  tcno: yup
    .string()
    .length(11, '*Kimlik no 11 rakamdan oluşmalı')
    .matches(numberMatcher, '*Kimlik no sadece rakamlardan oluşmalı'),
  reason: yup.string().required('Bu alanın doldurulması zorunludur. '),
  address: yup.string().required('Bu alanın doldurulması zorunludur. '),
  details: yup.string().required('Bu alanın doldurulması zorunludur. '),
});

export default schema;
