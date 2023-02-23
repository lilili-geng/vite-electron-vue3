import request from "../utils/request";
export function login(data: Object) {
  return request({
    url: "/api/token",
    method: "post",
    data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
}
