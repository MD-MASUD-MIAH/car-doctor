import { BookingUpdateForm } from '@/components/form/BookingUpdateForm';
import { headers } from 'next/headers';
import React from 'react';

async function UpdateBookingPage({params}) {
    const p  = await params


  const res = await fetch(`https://cardoctor-mocha.vercel.app/api/my-bookings/${p.id}`,{

    headers:new Headers(await headers())
  })

  const data = await res.json()

    return (
        <div>
          <BookingUpdateForm data={data}></BookingUpdateForm>  
        </div>
    );
}

export default UpdateBookingPage;