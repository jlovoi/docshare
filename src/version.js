const environment = {
  development: "http://localhost:80",
  production: "https://tryhighnoon.com:2599"
};

export const API_URL =
  environment[process.env.REACT_APP_API || process.env.NODE_ENV];

export const version = "0.1.0";
