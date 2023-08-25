import * as typeAction from "../constant/typeAction";
// Khởi tạo init State
const initState = {
  products: [],
  selectedProduct: null,
};
// Khởi tạo hàm xử lý logic
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case typeAction.ADD_PRODUCT:
      return {
        ...state,
        product: [...state.products, action.payload],
      };
    default:
      break;
  }
  return state;
};

export default productReducer;
