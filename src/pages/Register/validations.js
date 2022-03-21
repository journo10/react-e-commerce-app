import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().required("Bu alan zorunludur."),
  email: yup
    .string()
    .email("Geçerli bir email adresi girin.")
    .required("Email adresi zorunludur."),
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakterli olmalıdır.")
    .required("Bu alan zorunludur."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Şifre uyuşmuyor")
    .required("Bu alan zorunludur."),
});

export default validations;
