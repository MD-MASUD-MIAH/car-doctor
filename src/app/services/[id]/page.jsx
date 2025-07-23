import Image from "next/image";
import Link from "next/link";
import banner from "../../../../public/assets/images/checkout/checkout.png";
async function ServicesDetailsPage({ params }) {
  const p = await params; // make sure params is an object

  console.log(p.id);

  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error:", errorText);
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  const data = await res.json();

  console.log(data);

  return (
    <div>
      <section className="flex justify-center w-full">
        <figure className="relative">
          <Image
            width={1600}
            height={300}
            className="object-cover"
            src={banner}
            alt="banner image"
          ></Image>

          <div className="absolute w-full h-full  overlay-bg  top-0">
            <div className="w-full h-full flex items-center ps-16 text-2xl">
              <div>
                <h1 className="text-white font-bold">Service Details</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="w-11/12 mx-auto mt-20 flex justify-between gap-4">
        <div className=" ">
          <Image
            src={data.img}
            width={1200}
            height={600}
            alt={data.title}
            className="h-[600px] object-cover"
          ></Image>

          <h1 className="font-bold mt-10 text-6xl">{data.title}</h1>

          <p className="mt-5">{data.description}</p>
        </div>

        <div className="w-full">
          <Link
            href={`/checkout/${data._id}`}
            className="btn  w-full text-white bg-[#FF3811]"
          >
            Checkout
          </Link>
          <button className="btn  mt-3 w-full outline outline-[#FF3811] text-[#FF3811]">
            $ {data.price}
          </button>
        </div>
      </section>
    </div>
  );
}

export default ServicesDetailsPage;
