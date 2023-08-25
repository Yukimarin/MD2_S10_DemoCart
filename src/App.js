import React from "react";
import { createStore } from "redux";
import productReducer from "./redux/reducer/reducer";
import { Provider } from "react-redux";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
const store = createStore(productReducer);
function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductForm></ProductForm>
        <ProductList></ProductList>
      </div>
    </Provider>
  );
}

export default App;
