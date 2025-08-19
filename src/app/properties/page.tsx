import PropertyCard from "@/components/property/PropertyCard";

import connectDB from "@/config/database";

import Property, { PropertyLean } from "@/models/Property";

const PropertiesPage = async () => {
  await connectDB();

  const documents = await Property.find({}).lean();

  const properties: PropertyLean[] = documents.map((document: any) => ({
    ...document,
    _id: document._id.toString(),
  }));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Browse Properties</h1>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <PropertyCard property={property} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
