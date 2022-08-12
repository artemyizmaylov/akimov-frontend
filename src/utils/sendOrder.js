export default function sendOrder(message) {
  fetch('http://127.0.0.1:5000/cart', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(message),
  });
}
