import React from "react";
import {
  UserIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhotoIcon,
  GlobeAltIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
const Dealer = ({ dealer }) => {
  const { name, email, phone, address: {street, city}, website, company: {name: companyName} } = dealer;
  return (
    <div className="bg-pink-200 rounded-lg px-5 py-4 mt-3 border-pink-900 border-2">
      <div className="  flex justify-center items-center">
        <img
          className="h-20 w-20 rounded-full bg-pink-300 block relative -top-10 ring-4 ring-pink-200"
          alt={name}
          src=""
        />
      </div>
      <div className="-mt-8 text-pink-900 text-sm">
        <h2 className="flex items-center">
          <UserIcon className="h-4 w-4 mr-1 text-pink-900" /> {name}
        </h2>
        <p className="flex items-center">
          <EnvelopeIcon className="h-4 w-4 mr-1 text-pink-900" /> {email}
        </p>
        <p className="flex items-center">
          <PhotoIcon className="h-4 w-4 mr-1 text-pink-900" /> {phone}
        </p>
        <p className="flex items-center">
          <MapPinIcon className="h-4 w-4 mr-1 text-pink-900" />{" "}
          {`${street}, ${city}`}
        </p>
        <p className="flex items-center">
          <GlobeAltIcon className="h-4 w-4 mr-1 text-pink-900" /> {website}
        </p>
        <p className="flex items-center">
          <BriefcaseIcon className="h-4 w-4 mr-1 text-pink-900" />{" "}
          {companyName}
        </p>
      </div>
    </div>
  );
};

export default Dealer;
