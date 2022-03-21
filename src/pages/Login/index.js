import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const newUser = {
          email: values.email,
          password: values.password,
        };
        const loginResponse = await axios.post(
          "http://localhost:5000/login",
          newUser
        );
        login(loginResponse);
        navigate("/");
        console.log(loginResponse);
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
          Giriş Yap
        </h3>
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
        <button className="btn btn-sm btn-dark" type="submit">
          Giriş Yap
        </button>
      </form>
    </main>
  );
};

export default Login;
