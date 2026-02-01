import { placeOrder } from "../../api/order.api";

export default function PlaceOrder() {
  const submit = async () => {
    await placeOrder({
      items: [{ product: "PRODUCT_ID", qty: 2, price: 100 }],
    });
    alert("Order Placed");
  };

  return <button onClick={submit}>Place Order</button>;
}
