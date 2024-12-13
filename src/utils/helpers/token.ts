export const getToken = () => token;

export function setToken(value: string | null) {
  token = value;
}

var token: string | null = null;
