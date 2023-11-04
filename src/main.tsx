import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import server from "./services/server";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
server;

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
);
