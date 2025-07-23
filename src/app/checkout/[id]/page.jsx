import { CheckoutForm } from "@/components/form/CheckoutForm";

export default async function CheckoutPage({ params }) {
  console.log("ID:", params.id);

  const res = await fetch(`http://localhost:3000/api/service/${params.id}`);
  const data = await res.json();

  console.log(data);
  

  return (
    <div>
    

      <CheckoutForm data={data}></CheckoutForm> 

      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
