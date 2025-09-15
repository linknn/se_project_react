// fetch get items
// post/items
// delete items
const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error fetching items: ${res.status}`);
  });
}

export { getItems };
