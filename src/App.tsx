import { FruitsContextProvider } from "./Context";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <FruitsContextProvider>
      <Navbar />
      <Outlet />
    </FruitsContextProvider>
  );
};

export default App;
