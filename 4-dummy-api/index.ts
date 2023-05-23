import axios, {AxiosError} from "axios";
import * as types from "./types";

function newApiError(status?: number, code?: string, message = "", ): types.ApiError {
  return {
    code,
    status,
    message,
  }
}

function isApiError (error: unknown): error is types.ApiError {
  return !!error && typeof error === "object" && "code" in error && "status" in error && "message" in error;
}

export const getUsers = async () => {
  return new Promise<types.GetUsersResponse>((resolve, reject) => {
    axios.get<types.GetUsersResponse>("https://dummyjson.com/users")
      .then((response) => {
        if (response.status === 200) return resolve(response.data);
        reject(newApiError(response.status, response.statusText));
      })
      .catch((error: unknown) => {
        if (error instanceof AxiosError) {
          reject(newApiError(error.status, error.code, error.message))
        }

        if (error instanceof Error) {
          reject(newApiError(0, error.name, error.message))
        }

        reject(error);
      });
  })
}

getUsers()
  .then((data) => {
    console.log(data.total);
  })
  .catch((error) => {
    if (isApiError(error)) {
      console.log(error.status, error.code, error.message);
    } else {
      console.log(error);
    }
  });
