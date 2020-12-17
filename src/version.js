const environment = {
	development: 'http://localhost:8080',
	stage: 'https://tryhighnoon.com:2599',
	production: 'https://tryhighnoon.com:2599',
};

export const API_URL =
	environment[process.env.REACT_APP_API || process.env.NODE_ENV];

export const version = '0.1.1';
