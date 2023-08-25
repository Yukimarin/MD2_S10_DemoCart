import * as typeAction from "../constant/typeAction";
// Khởi tạo hàm thêm sản phẩm
export const add_product = (product) => {
  return { type: typeAction.ADD_PRODUCT, payload: product };
};
