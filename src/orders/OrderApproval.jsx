import { approveOrder } from "../../api/order.api";

export default function OrderApproval({ id }) {
  return <button onClick={() => approveOrder(id)}>Approve</button>;
}
