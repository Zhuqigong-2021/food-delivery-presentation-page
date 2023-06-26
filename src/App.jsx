import "./App.css";

import Stack from "./components/Stack";
import Login from "./components/Login";
import Procedure from "./components/Procedure";
import Payment from "./components/Payment";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="bg-red-500  flex flex-col items-center ">
        <Stack />
        <Login />
        <Procedure />
        <Payment />
        <Search />
      </div>
    </>
  );
}

export default App;
