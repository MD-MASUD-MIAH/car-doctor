

import { headers } from "next/headers";
import MyAllBookings from "./components/MyAllBookings";

const fetchMyBookings = async ()=>{

  const res = await fetch('https://cardoctor-mocha.vercel.app/api/service',{

    headers: new Headers(await headers())})

  const d = await res.json()
  return d
}  
async function MyBooking(props) {

const data = await fetchMyBookings()


  return <div>


    <MyAllBookings data={data} ></MyAllBookings>
  </div>;
}

export default MyBooking;
