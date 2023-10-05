import Image from 'next/image';
import React from 'react';

const Biography = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 mt-10">
      <div className="rounded-md bg-slate-800 p-5">
        <h1 className="text-xl md:text-3xl mb-3 text-indigo-300">
          Biography-1
        </h1>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2">
            <Image
              src="/n1.webp"
              alt="biography"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              deserunt inventore impedit expedita dolorem minus quis qui
              veritatis aspernatur dolor.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-slate-800 p-5">
        <h1 className="text-xl md:text-3xl mb-3 text-indigo-300">
          Biography-2
        </h1>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2">
            <Image
              src="/n2.webp"
              alt="biography"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              deserunt inventore impedit expedita dolorem minus quis qui
              veritatis aspernatur dolor.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-slate-800 p-5">
        <h1 className="text-xl md:text-3xl mb-3 text-indigo-300">
          Biography-3
        </h1>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2">
            <Image
              src="/n3.webp"
              alt="biography"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              deserunt inventore impedit expedita dolorem minus quis qui
              veritatis aspernatur dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
