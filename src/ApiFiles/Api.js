
const API_URL = "https://cafe-de-altura-api.vercel.app/api/products";
export const ApiCoffes = async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data;
};