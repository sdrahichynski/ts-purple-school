import axios, {AxiosError} from "axios";
import * as types from "./types";

function newApiError(code?: string, status?: number, message = ""): types.ApiError {
  return {
    code,
    status,
    message,
  }
}

export const getUsers = async () => {
  return new Promise<types.GetUsersResponse>(async (resolve, reject) => {
    axios.get<types.GetUsersResponse>("https://dummyjson.com/users")
      .then((response) => {
        if (response.status === 200) return resolve(response.data);
        reject(newApiError(response.statusText, response.status));
      })
      .catch((error: AxiosError) => {
        reject(newApiError(error.code, error.status, error.message))
      });
  })
}

getUsers()
  .then((data) => {
    console.log(data.total);
  })
  .catch((m) => {
    console.log(m.status, m.code, m.message)
  });
