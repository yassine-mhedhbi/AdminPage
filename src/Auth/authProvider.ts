import inMemoryJWT from "./inMemoryJWT";
import axios from 'axios'
import { fetchUtils } from "react-admin";
export interface User {
    username: string;
    password: string;
  }

export const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: "application/json" });
    }
    const token = inMemoryJWT.getToken();
    options.headers.set("Authorization", `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };

const authProvider = {
    login: async ({ username, password } : User) => {
        const request = new Request( process.env.REACT_APP_API + '/token', {
            method: 'POST',
            mode:'no-cors',
            body: new URLSearchParams({
                'username': username,
                'password': password
            }),
        });
        const body = new URLSearchParams({
            'username': username,
            'password': password
        })

        return await axios.post(process.env.REACT_APP_API + '/token', body)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.data.access_token;
            })
            .then((token: any) => inMemoryJWT.setToken(token));
    },
    logout: () => {
        inMemoryJWT.ereaseToken();
        return Promise.resolve();
    },

    checkAuth: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    },

    checkError: (error: any) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            inMemoryJWT.ereaseToken();
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    },
};

export default authProvider;