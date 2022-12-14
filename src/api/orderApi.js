import axiosClient from "./axiosClient";

const orderApi = {
  getAll(params) {
    const url = "/orders";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/orders/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/orders/${data.id}`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/orders/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/orders/${id}`;
    return axiosClient.delete(url);
  },

  getMyOrders(params) {
    const url = `/orders/getMyOrders`;
    return axiosClient.get(url, { params });
  },
};

export default orderApi;
