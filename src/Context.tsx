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

interface StoreContext {
  fruits: Fruits;
  setFruits: SetFruits;
  filters: Filters;
  setFilters: SetFilters;
}

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContext = createContext<StoreContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useStoreContext = () => {
  return useContext(StoreContext);
};

export const StoreContextProvider: FC<StoreContextProviderProps> = ({ children }) => {
  const [fruits, setFruits] = useState<Fruits>(initialFruits);
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <StoreContext.Provider value={{ fruits, setFruits, filters, setFilters }}>
      {children}
    </StoreContext.Provider>
  );
};
