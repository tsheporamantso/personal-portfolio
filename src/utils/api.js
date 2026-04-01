export const BASE_URL = process.env.REACT_APP_API_URL;

const API = {
  testimonials: `${BASE_URL}/api/v1/testimonials`,
  projects: `${BASE_URL}/api/v1/projects`,
  services: `${BASE_URL}/api/v1/services`,
};

export default API;
