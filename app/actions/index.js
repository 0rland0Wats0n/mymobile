import axios from 'axios';

export const GET_IMAGES = 'GET_IMAGES';

const ROOT_URL = process.env.ROOT_URL || 'http://localhost:4242';

export function getImages() {
  const request = axios.get(`${ROOT_URL}/api/images`);

  return {
    type: GET_IMAGES,
    payload: request
  };
};
