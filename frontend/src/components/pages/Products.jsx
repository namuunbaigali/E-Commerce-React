import json from "../../data.json";

export default function Products() {
  return <>{json.Product[0].price}</>;
}
