// app/services/page.jsx or page.tsx

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const ServicesPage = async () => {
  const services = await dbConnect(collectionNameObj?.servicesCollection)
    .find({})
    .toArray();
  console.log(services);

  return (
    <div className="w-11/12 mx-auto overflow-hidden">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center w-11/12 mx-auto">
        {services?.map((service) => (
          <div
            key={service?._id}
            className=" rounded-xl border p-4 shadow-sm hover:shadow-md transition duration-300 bg-white overflow-hidden"
          >
            {/* Image */}
            <div className="w-full aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-lg md:text-xl font-semibold mt-4">
              {service.title}
            </h1>

            {/* Price */}
            <p className="text-[#FF3811] font-semibold mt-1">
              Price : ${service.price}
            </p>

            {/* Arrow Icon */}
            <div className="mt-2 flex justify-end">
              <Link href={`/services/${service._id}`} className="">
                {" "}
                <FaArrowRight className="text-[#FF3811] text-base md:text-lg" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
