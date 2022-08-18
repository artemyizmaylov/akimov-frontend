const url = "https://api.daryvolkhvov.ru/cart";

export default function sendOrder(message) {
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(message),
  })
    .then((res) => res.json())
    .then((res) => console.log(res.message))
    .catch((err) => console.log(err));
}
