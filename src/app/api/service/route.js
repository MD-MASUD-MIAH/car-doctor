
import { authOption } from "@/lib/authOption";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export const GET = async (req)=>{

const session = await getServerSession(authOption)

if(session){

  console.log(session);

  const email = session?.user?.email 

  console.log(email);


  const bookingCollection = dbConnect(collectionNameObj.bookingCollection)

  const result = await bookingCollection.find({email}).toArray()

  return NextResponse.json(result)
  
}

return NextResponse.json({})

}



export const POST = async(req)=>{



    const body = await req.json()
   const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    
   const result = await bookingCollection.insertOne(body)
  return NextResponse.json(result)

}