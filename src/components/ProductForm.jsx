import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_product } from "../redux/action/action";
function ProductForm() {
  // useSelector để lấy dữ liệu
  const selectedProduct = useSelector((state) =>
    console.log("ProductForm===>", state)
  );
  // useDispatch để bắn action lên store
  const dispatch = useDispatch();
  // Khởi tạo state để lữu trữ dữ liệu input
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
  });
  // Xử lý form
  // Khởi tạo handleChange để bắt value input
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  // console.log("Sau handleChange", product);
  // Khởi tạo handleSubmit để cập nhật dữ liệu
  const handleSubmit = (e) => {
    e.preventDefault();
    // Khai báo biến newProduct sao chép lại product và thêm id
    const newProduct = { ...product, id: Math.floor(Math.random() * 100) };
    // Sử dụng useDispatch bấn action lên store
    dispatch(add_product(newProduct));
    setProduct({
      id: "",
      name: "",
      price: "",
    });
  };
  return (
    <div>
      <h2>Form Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=''>Name Product</label>
          <input
            type='text'
            name='name'
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor=''>Price Product</label>
          <input
            type='text'
            name='price'
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;
