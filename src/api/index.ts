import axios from 'axios';
import { IObjMenuHeader } from '../interface';

export const getListObjMenuHeader = async () => {
  try {
    const response = await axios.get<IObjMenuHeader[]>(
      '/api/resource/menu-header',
    );
    return response.data;
  } catch (e) {}
};

export const getListObjBenefit = async () => {
  try {
    const response = await axios.get<IObjMenuHeader[]>('/api/resource/benefit');
    return response.data;
  } catch (e) {}
};
