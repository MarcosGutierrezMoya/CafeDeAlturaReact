
const API_URL = "https://cafe-de-altura.vercel.app/api/products";
export const ApiCoffes = async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  // const newCoffees = data.map(coffee=>{return{
  //   _id: coffee._id,
  //   brand: coffee.brand,
  //   price: coffee.price,
  //   img_url: coffee.img_url,

  // }})
  return data;
};