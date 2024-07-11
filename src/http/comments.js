import axiosClient from "../configAxios/axiosclient";

const commentsApi = {
  getAllComments({ page = 1, pageSize = 6 }) {
    // const url = `?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=fc850477ce454f5096d25a139d057a8a`;
    const url = `/comments?page=${page}&limit=${pageSize}`;
    return axiosClient.get(url);
  },
};
export default commentsApi;
export const carouselItems = [
  {
    title: "First Slide",
    description: "This is the first slide description.",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    source: "Rustic Bronze Bike",
    publishedAt: "2064-07-28T14:17:03.334Z",
  },
  {
    title: "First Slide",
    description: "This is the first slide description.",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    source: "Rustic Bronze Bike",
    publishedAt: "2064-07-28T14:17:03.334Z",
  },
  {
    title: "First Slide",
    description: "This is the first slide description.",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    source: "Rustic Bronze Bike",
    publishedAt: "2064-07-28T14:17:03.334Z",
  },
  {
    title: "First Slide",
    description: "This is the first slide description.",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    source: "Rustic Bronze Bike",
    publishedAt: "2064-07-28T14:17:03.334Z",
  },
];
