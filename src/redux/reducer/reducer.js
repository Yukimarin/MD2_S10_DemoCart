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
        products: [...state.products, action.payload],
      };
    case typeAction.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((e) => e.id !== action.payload),
      };
    case typeAction.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
        selectedProduct: null,
      };
    case typeAction.SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default productReducer;
