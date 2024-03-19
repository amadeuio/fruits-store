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
import { initialFilters } from "./data/filters";
import { Fruits } from "./data/types";
import { Filters } from "./data/types";

type SetFruits = Dispatch<SetStateAction<Fruits>>;
type SetFilters = Dispatch<SetStateAction<Filters>>;

interface FruitsContext {
  fruits: Fruits;
  setFruits: SetFruits;
  filters: Filters;
  setFilters: SetFilters;
}

interface FruitsContextProviderProps {
  children: ReactNode;
}

const FruitsContext = createContext<FruitsContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(FruitsContext);
};

export const FruitsContextProvider: FC<FruitsContextProviderProps> = ({ children }) => {
  const [fruits, setFruits] = useState<Fruits>(initialFruits);
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <FruitsContext.Provider value={{ fruits, setFruits, filters, setFilters }}>
      {children}
    </FruitsContext.Provider>
  );
};
