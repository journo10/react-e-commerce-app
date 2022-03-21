import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const initialState = { name: "", price: "", unitsInStock: "", description: "", imageUrl: "", category: "" }
const ProductsAdd = () => {
  const [form, setForm] = useState(initialState)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    const newProduct = {
      name: form.name,
      price: form.price,
      unitsInStock: form.unitsInStock,
      description: form.description,
      imageUrl: form.imageUrl,
      category: form.category
    }
    axios.post("http://localhost:5000/products", newProduct);
    navigate("/")
    setForm({
      name: "",
      price: "",
      unitsInStock: "",
      description: "",
      imageUrl: "",
      category: ""
    })
  }

  return (
    <div className="container w-50 mt-3">
      <form className="add-form" onSubmit={onSubmitForm}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Ürün Adı:
          </label>
          <input
            onChange={handleChange}
            value={form.name}
            name="name"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Ürün Adı"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Ürün Fiyatı:
          </label>
          <input
            onChange={handleChange}
            value={form.price}
            name="price"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Ürün Fiyatı"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Ürün Adeti:
          </label>
          <input
            onChange={handleChange}
            value={form.unitsInStock}
            name="unitsInStock"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Ürün Adeti"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Ürün Açıklaması:
          </label>
          <textarea
            onChange={handleChange}
            value={form.description}
            name="description"
            className="form-control"
            placeholder=" Ürün Açıklaması"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Ürün Resmi:
          </label>
          <input
            onChange={handleChange}
            value={form.imageUrl}
            name="imageUrl"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Ürün Resmi"
          />
        </div>
        <div className="form-floating mb-3">
          <select
            onChange={handleChange}
            value={form.category}
            name="category"
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option defaultValue>Kategori</option>
            <option value="1">Bilgisyar</option>
            <option value="2">Tablet Pc</option>
            <option value="3">Mouse</option>
            <option value="4">Telefon</option>
            <option value="4">Fotoğraf Makinesi</option>
            <option value="4">Tripot</option>
          </select>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-dark">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsAdd;
