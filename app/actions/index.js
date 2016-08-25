import axios from 'axios';

export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGE = 'GET_IMAGE';
export const LOGIN = 'LOGIN';

const ROOT_URL = process.env.ROOT_URL || 'http://localhost:4242';

export function getImages() {
  const request = axios.get(`${ROOT_URL}/api/images`);

  return {
    type: GET_IMAGES,
    payload: request
  };
};

export function getImage(id) {
  const request = axios.get(`${ROOT_URL}/api/images/${id}`);

  return {
    type: GET_IMAGE,
    payload: request
  };
};

export function login(data) {
  const request = axios.post(`${ROOT_URL}/authenticate`, data);

  return {
    type: LOGIN,
    payload: request
  }
}
