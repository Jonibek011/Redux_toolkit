import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//react-toastify
import { Slide, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
//store
import { store } from "./store.js";
//react-redux
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={1000}
      limit={2}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  </Provider>
);
