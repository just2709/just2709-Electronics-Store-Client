import axiosClient from "./axiosClient";

const userApi = {
  signup(data) {
    const url = "/users/signup";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/users/login";
    return axiosClient.post(url, data);
  },
  forgotPassword(data) {
    const url = "/users/forgotPassword";
    return axiosClient.post(url, data);
  },
  resetPassword(data) {
    const url = "/users/forgotPassword";
    return axiosClient.post(url, data);
  },
  updatePassword(data) {
    const url = "/users/forgotPassword";
    return axiosClient.post(url, data);
  },
  getAll(params) {
    const url = "/users";
    return axiosClient.get(url, { params });
  },
  updateMe(data) {
    const url = "/users/updateMe";
    return axiosClient.patch(url, data);
  },
  deleteMe() {
    const url = "/users/updateMe";
    return axiosClient.delete(url);
  },
};

export default userApi;
