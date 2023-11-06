import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "./services/ConnectToDB.ts";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
);
