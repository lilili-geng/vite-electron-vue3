import request from "../utils/request";
export function login(data: any) {
  return request({
    url: "/api/token",
    method: "post",
    data,
  });
}
