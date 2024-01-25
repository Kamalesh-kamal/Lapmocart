const API_URL = "https://lapmocart-data.onrender.com";

export async function getItems() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw Error("Failed getting menu");
  const data = await res.json();
  return data;
}



export async function getOrder(id){

  const res= await fetch(`${API_URL}/order/${id}`);
  if(!res.ok) throw new Error("failed to fetch item")
  const data=await res.json();
return data;

}

export async function createOrder(newOrder) {
  const options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrder),
  };
  const res = await fetch(`${API_URL}/order`, options);

  if (!res.ok) throw new Error("Failed creating your order");
  const data = res.json();
  return data;
}
