import { Fruits } from "./data/types";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import { initialFruits } from "./data/fruits";

type SetFruits = Dispatch<SetStateAction<Fruits>>;

interface FruitsContext {
  fruits: Fruits;
  setFruits: SetFruits;
}

interface FruitsContextProviderProps {
  children: ReactNode;
}

const FruitsContext = createContext<FruitsContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useFruitsContext = () => {
  return useContext(FruitsContext);
};

export const FruitsContextProvider: FC<FruitsContextProviderProps> = ({ children }) => {
  const [fruits, setFruits] = useState<Fruits>(initialFruits);

  return <FruitsContext.Provider value={{ fruits, setFruits }}>{children}</FruitsContext.Provider>;
};
