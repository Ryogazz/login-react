// context api para gerenciar o estado da aplicação (stores)

import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { getListStores } from '../utils/wapAPI';

type Store = {
  id: number;
  name: string;
  active: boolean;
};

type StoresContextValues = {
  stores: Store[];
  search: string;
  setSearch: any;
  setStores: any;
  storesSelected: number[];
  setStoresSelected: any;
  token: string;
  setToken: any;
  toggleBg: boolean;
  setToggleBg: any;
  isLoading: boolean;
  setIsLoading: any;
};

export const StoresContext = createContext<StoresContextValues>({
  setStores: () => {},
  stores: [],
  setStoresSelected: () => {},
  storesSelected: [],
  token: '',
  setToken: () => {},
  search: '',
  setSearch: () => {},
  toggleBg: false,
  setToggleBg: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

type Props = {
  children: React.ReactNode;
};

export default function StoresProvider({ children }: Props) {
  const [stores, setStores] = useState<Array<Store>>([]);
  const [storesSelected, setStoresSelected] = useState<Array<number>>([]);
  const [search, setSearch] = useState<string>('');
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [toggleBg, setToggleBg] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Carrega as stores e faz o filtro de pesquisa
  useEffect(() => {
    setIsLoading(true);
    getListStores(token).then((res) => {
      setStores(res.data.filter(
        (store) => store.name.toLowerCase().includes(search.toLowerCase()),
      ));
      setIsLoading(false);
    });
  }, [search]);

  const values = {
    stores,
    setStores,
    storesSelected,
    setStoresSelected,
    search,
    setSearch,
    token,
    setToken,
    toggleBg,
    setToggleBg,
    isLoading,
    setIsLoading,
  };

  const memo = useMemo(() => values, [values]);

  return (
    <StoresContext.Provider value={memo}>{children}</StoresContext.Provider>
  );
}

StoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
