import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const Cart = () => {
  const { items, clearCart,clearAllCart } = useCart();

  //toplam
  const total = items.reduce((acc, obj) => acc + obj.price, 0)

  return (
    <>
      {items.length < 1 ? (
        <div className="container1">
          <div className="card bg-dark text-center pt-2">
            <h3 className="card-title text-white">SEPET</h3>
          </div>
          <div className="card2 mt-3">
            <h4>Sepet boş</h4>
            <h6>Ürün eklemek için satın al butonuna tıklayınız.</h6>
            <Link to="/" className="btn btn-outline-dark">
              Satın al
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="card-table">
            <div className="card-products">
              <table className="table ">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>İsim</th>
                    <th>Fotoğraf</th>
                    <th>Açıklama</th>
                    <th>Fiyat</th>
                    {/* <th>Adet</th>
                    <th>Toplam</th> */}
                    <th>Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td><strong>{item.name}</strong></td>
                      <td>
                        <img style={{ width: "130px" }} src={item.imageUrl} alt={item.name} />
                      </td>
                      <td ><strong>{item.description}</strong> </td>
                      <td ><strong>{item.price} TL</strong> </td>
                      {/* <td ></td>
                      <td ></td> */}
                      <td>
                        <button onClick={() =>clearCart(item.id)} className="btn btn-danger">Sil</button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3}></td>
                    <td>
                      <button onClick={() =>clearAllCart()} className="btn btn-danger btn-sm">
                        Hepsini Sil
                      </button>
                    </td>
                    <td>
                      <Link to="/" className="btn btn-primary btn-sm">
                        Alışveriş'e Git
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-success btn-sm">Öde</button>
                    </td>
                    <td>
                      <strong className="text-danger">TOPLAM: {total} TL</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
