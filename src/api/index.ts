import axios, { AxiosInstance } from 'axios';
import { IObjBenefit, IObjMenuHeader } from '../interface';

const instanceAxios: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ||
    process.env.REACT_APP_IS_USE_PROXY === 'true'
      ? '/api'
      : `${process.env.REACT_APP_URL_API_SERVER}/api`,
});

export const getListObjMenuHeader = async () => {
  try {
    const response = await instanceAxios.get<IObjMenuHeader[]>(
      '/resource/menu-header',
    );
    return response.data;
  } catch (e) {}
};

export const getListObjBenefit = async () => {
  try {
    const response =
      await instanceAxios.get<IObjBenefit[]>('/resource/benefit');
    return response.data;
  } catch (e) {}
};
