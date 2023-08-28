import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_product, select_product } from "../redux/action/action";

function ProductList() {
  // Sử dụng useSelector để nhận state
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // Hàm handleDelete
  const handleDelete = (id) => {
    dispatch(delete_product(id));
  };
  // Khởi tạo hàm handleEdit
  const handleEdit = (product) => {
    dispatch(select_product(product));
  };
  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>
                <button onClick={() => handleEdit(e)}>Edit</button>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
