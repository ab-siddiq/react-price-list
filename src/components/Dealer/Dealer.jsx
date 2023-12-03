import React from "react";

const Dealer = ({ dealer }) => {
  const { name, email, phone, address, website, company } = dealer;
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
        <h2 className="">Name: {name}</h2>
        <p className="">Email: {email}</p>
        <p className="">Phone: {phone}</p>
        <p className="">Address:{`${address.street}, ${address.city}`}</p>
        <p className="">Website: {website}</p>
        <p className="">Company: {company.name}</p>
      </div>
    </div>
  );
};

export default Dealer;
