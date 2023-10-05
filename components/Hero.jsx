import React from 'react';

const Hero = () => {
  return (
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="flex flex-col md:flex-row justify-center md:justify-between items-center border-b border-blue-700 pb-10">
        <div class="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <img
            src="/images/sk3.png"
            alt="hero"
            width="500"
            height="500"
            class="rounded-full object-cover mx-auto md:mx-0"
          />
        </div>
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h1 class="font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Sirazus Salekin
            </span>{' '}
            Chowdhury
          </h1>
          <p class="mt-4 md:mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam in
            quis voluptatum similique magnam, earum sint porro cumque? Inventore
            impedit quae architecto dolorem temporibus nesciunt consequuntur
            voluptas praesentium et placeat?
          </p>
          <button class="rounded-md bg-indigo-500 text-white px-5 py-3 mt-7 hover:bg-blue-500">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
