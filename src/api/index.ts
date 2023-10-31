import axios from 'axios';

export const getListObjMenuHeader = async () => {
  try {
    const response = await axios.get('/api/resource/menu-header');
    return response.data;
  } catch (e) {}
};
