import axios, { AxiosError } from 'axios';

const wapAPI = axios.create({
  baseURL: 'https://apimw.sistemagiv.com.br/test_front',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

// Arquivo de configuração do axios para o WAP API (Web API Prod)

export const login = async (username: string, password: string) => {
  try {
    const response = await wapAPI.post('/users/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    const message = (error as AxiosError).response?.data?.data?.message
      || 'Erro ao realizar login';
    throw new Error(message);
  }
};

export const getListStores = async (token: string | null) => {
  try {
    const response = await wapAPI.get('/stores', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data as { data: any[] };
  } catch (error) {
    throw new Error((error as AxiosError).response?.data?.data?.message);
  }
};

export const changeActiveStores = async (
  ids: number[],
  active: boolean,
  token: string | null,
) => {
  try {
    const response = await wapAPI.put('/stores/edit-active', {
      ids,
      active,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data?.data?.message);
  }
};

export const getDetailedStore = async (id: number, token: string | null) => {
  try {
    const response = await wapAPI.get(`/stores/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).response?.data?.data?.message);
  }
};
