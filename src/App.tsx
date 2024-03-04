import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { FruitsContextProvider } from "./Context";

const App = () => {
  return (
    <FruitsContextProvider>
      <Navbar />
      <Outlet />
    </FruitsContextProvider>
  );
};

export default App;
