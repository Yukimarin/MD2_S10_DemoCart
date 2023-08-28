import * as typeAction from "../constant/typeAction";
// Khởi tạo hàm thêm sản phẩm
export const add_product = (product) => {
  return { type: typeAction.ADD_PRODUCT, payload: product };
};
// Khởi tạo hàm xóa sản phẩm
export const delete_product = (id) => {
  return {
    type: typeAction.DELETE_PRODUCT,
    payload: id,
  };
};
// Khởi tạo hàm update sản phẩm
export const update_product = (product) => {
  return {
    type: typeAction.UPDATE_PRODUCT,
    payload: product,
  };
};

// Khởi tạo hàm chọn sản phẩm
export const select_product = (product) => {
  return {
    type: typeAction.SELECT_PRODUCT,
    payload: product,
  };
};
