import { createContext, useState, useMemo } from "react";

const CartContext = createContext();
export default CartContext;

function useCart() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const countTotalPrice = () => {
    let total = 0;

    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        total += item.price * item.count;
      });
    }

    return total;
  };

  const increaseItemCount = (item) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.article === item.article &&
        cartItem.size === item.size &&
        cartItem.material === item.material
    );
    const newItems = [...cartItems];

    newItems[index].count++;
    setCartItems(newItems);
  };

  const decreaseItemCount = (item) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.article === item.article &&
        cartItem.size === item.size &&
        cartItem.material === item.material
    );

    if (index > -1) {
      const newItems = [...cartItems];

      newItems[index].count--;
      setCartItems(newItems);
    }
  };

  const addToCart = (item) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.article === item.article &&
        cartItem.size === item.size &&
        cartItem.material === item.material
    );

    const itemCopy = { ...item };
    itemCopy.count = 1;

    if (index === -1) {
      setCartItems([...cartItems, itemCopy]);
    } else {
      increaseItemCount(itemCopy);
    }
  };

  const deleteFromCart = (item) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.article === item.article &&
        cartItem.size === item.size &&
        cartItem.material === item.material
    );

    if (index > -1) {
      const newItems = [...cartItems];

      newItems.splice(index, 1);
      setCartItems(newItems);
    }
  };

  return useMemo(
    () => ({
      cartIsOpen,
      setCartIsOpen,
      cartItems,
      setCartItems,
      addToCart,
      increaseItemCount,
      decreaseItemCount,
      deleteFromCart,
      totalPrice,
      setTotalPrice,
      countTotalPrice,
    }),
    [cartIsOpen, cartItems, totalPrice]
  );
}

export { useCart };
