const url = "https://api.daryvolkhvov.ru";
// const url = "http://127.0.0.1:5000";

async function sendOrder(message) {
  const res = await fetch(`${url}/cart`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(message),
  });
  return await res.json();
}

async function getItems() {
  const res = await fetch(`${url}/items`, { method: "GET" });
  return await res.json();
}

export { sendOrder, getItems };
