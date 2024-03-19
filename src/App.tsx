import { AppContextProvider } from "./Context";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <AppContextProvider>
      <Navbar />
      <Outlet />
    </AppContextProvider>
  );
};

export default App;
