"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const BookingUpdateForm = ({ data }) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session, data);

  const handleBookService = async (e) => {
    toast("Submitting Booking...");
    e.preventDefault();

    const form = e.target;

    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const bookingPayload = {
      // Session
      //   customerName: name,
      //   email,

      // User Inputs
      date,
      phone,
      address,

      // Extra information
      //   service_id: data._id,
      //   service_name: data.title,
      //   service_img: data.img,
      //   service_price: data.price,
    };

    console.log("final data", bookingPayload);

    const res = await fetch(
      `https://cardoctor-mocha.vercel.app/api/my-bookings/${data._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(bookingPayload),
      }
    );
    const postedResponse = await res.json();
    router.push("/my-bookings");
    console.log("Update data response", postedResponse);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Book Service: <span className="text-[#FF3811]">{data?.title}</span>
          </h2>
          <p className="text-gray-600">
            Fill in your details to complete the booking
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleBookService} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                defaultValue={session?.user?.name}
                readOnly
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                defaultValue={session?.user?.email}
                readOnly
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
              />
            </div>

            {/* Price Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Due Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  type="text"
                  defaultValue={data?.service_price}
                  readOnly
                  name="price"
                  className="w-full pl-8 px-4 py-3 rounded-lg border border-gray-300 bg-gray-50"
                />
              </div>
            </div>

            {/* Date Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                defaultValue={data?.date}
                type="date"
                name="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                min={new Date().toISOString().split("T")[0]} // Disable past dates
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                defaultValue={data?.phone}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                required
              />
            </div>

            {/* Address Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                defaultValue={data?.address}
                name="address"
                placeholder="123 Main St, City, Country"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#FF3811] hover:bg-[#e03510] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.01] shadow-md"
            >
              Confirm Booking
            </button>
          </div>
        </form>

        {/* Additional Info (Optional) */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Need help?{" "}
            <a href="#" className="text-[#FF3811] hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
