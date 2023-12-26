import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import {Store} from "../src/Redux/Store/Store"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={Store}>
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <Toaster />
    </Provider>
  );
}

export default App;
