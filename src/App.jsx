import "./App.css";

import Stack from "./components/Stack";
import Login from "./components/Login";
import Procedure from "./components/Procedure";
import Payment from "./components/Payment";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Favourite from "./components/Favourite";
import Order from "./components/Order";
import Data from "./components/Data";
import Security from "./components/Security";
import Realtime from "./components/Realtime";
import Sanity from "./components/Sanity";
import Graphql from "./components/Graphql";
import Play from "./components/Play";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="  flex flex-col items-center ">
        <Stack />
        <Login />
        <Procedure />
        <Payment />
        <Search />
        <Cart />
        <Account />
        <Favourite />
        <Order />
        <Data />
        <Security />
        <Realtime />
        <Sanity />
        <Graphql />
        <Play />
        <Footer />
      </div>
    </>
  );
}

export default App;
