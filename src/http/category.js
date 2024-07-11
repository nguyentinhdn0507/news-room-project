import axiosClient from "../configAxios/axiosclient";

const categoryApi = {
  getAll({ category, page = 1, pageSize = 6 }) {
    // const url = `?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=fc850477ce454f5096d25a139d057a8a`;
    const url = `/fakeData?page=${page}&limit=${pageSize}`;
    return axiosClient.get(url);
  },
};
export default categoryApi;
