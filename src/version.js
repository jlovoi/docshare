const environment = {
  development: "http://localhost:8000",
  production: "https://tryhighnoon.com:8000"
};

export const API_URL =
  environment[process.env.REACT_APP_API || process.env.NODE_ENV];

export const version = "0.1.0";
