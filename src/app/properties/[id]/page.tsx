import Link from "next/link";
import { Types } from "mongoose";

import { FaArrowLeft } from "react-icons/fa";

import PropertyHeaderImage from "@/components/property/PropertyHeaderImage";

import connectDB from "@/config/database";

import Property, { PropertyLean } from "@/models/Property";
import PropertyDetails from "@/components/property/PropertyDetails";

const PropertyPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  await connectDB();

  const document = await Property.findById(id).lean<
    Omit<PropertyLean, "_id"> & { _id: Types.ObjectId }
  >();

  if (!document) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  const property: PropertyLean = {
    ...document,
    _id: document._id.toString(),
  };

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] w-full gap-6">
            <PropertyDetails property={property} />
            {/* <!-- Sidebar --> */}
            <aside className="space-y-4"></aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
