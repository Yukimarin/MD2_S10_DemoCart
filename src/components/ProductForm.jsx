import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_product, update_product } from "../redux/action/action";
function ProductForm() {
  // useSelector để lấy dữ liệu
  const selectedProduct = useSelector((state) => state.selectedProduct);
  // useDispatch để bắn action lên store
  const dispatch = useDispatch();
  // Khởi tạo state để lữu trữ dữ liệu input
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
  });
  // Cập nhật dữ liệu lên form, sử dụng dependencis tránh gọi lại useEffect
  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      setProduct({
        id: "",
        name: "",
        price: "",
      });
    }
  }, [selectedProduct]);
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
    if (product.id) {
      dispatch(update_product(product));
    } else {
      // Tạo mới sản phẩm
      // Khai báo biến newProduct sao chép lại product và thêm id
      const newProduct = { ...product, id: Math.floor(Math.random() * 100) };
      // Sử dụng useDispatch bấn action lên store
      dispatch(add_product(newProduct));
      setProduct({
        id: "",
        name: "",
        price: "",
      });
    }
  };
  return (
    <div>
      <h1>Form Product</h1>
      <h3>{selectedProduct ? "EDIT PRODUCT" : "ADD PRODUCT"}</h3>
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
        <button type='submit'>{selectedProduct ? "UPDATE" : "SUBMIT"}</button>
      </form>
    </div>
  );
}

export default ProductForm;
