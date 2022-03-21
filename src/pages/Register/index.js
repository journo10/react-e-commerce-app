import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
          passwordConfirm: values.passwordConfirm,
        };
        const registerResponse = await axios.post(
          "http://localhost:5000/register",
          newUser
        );
        login(registerResponse);
        navigate("/login")
        console.log(registerResponse);
      } catch (error) {
        bag.setErrors({ general: error.response.data.message }); //backend tarafında aynı verilerle kayıt olunmuşsa aşağıda alert verecek, ama bende gerçek backend olmadığı için bir şey dönmeyecek.
      }
    },
  });

  return (
    <main className="form-signin">
      {formik.errors.general && (
        <div class="alert alert-secondary" role="alert">
          {formik.errors.general}
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <h3 style={{ textAlign: "center" }} className="h3 mb-3 fw-normal">
          Kayıt Ol
        </h3>
        <div className="form-floating">
          <label htmlFor="floatingInput">Name</label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            type="text"
            className="form-control"
            id="floatingInputName"
            placeholder="Name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-danger">*{formik.errors.name}</div>
          )}
        </div>
        <div className="form-floating">
          <label htmlFor="floatingInput">E-posta</label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="E-posta"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-danger">*{formik.errors.email}</div>
          )}
        </div>
        <div className="form-floating">
          <label htmlFor="floatingPassword">Şifre</label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Şifre"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-danger">*{formik.errors.password}</div>
          )}
        </div>
        <div className="form-floating">
          <label htmlFor="floatingPassword">Şifre Onayla</label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            name="passwordConfirm"
            type="password"
            className="form-control"
            id="floatingPasswordConfirm"
            placeholder="Şifre Onayla"
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="text-danger">*{formik.errors.passwordConfirm}</div>
          )}
        </div>
        <button className="btn btn-sm btn-dark" type="submit">
          Kayıt Ol
        </button>
      </form>
    </main>
  );
};

export default Register;
