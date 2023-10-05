import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <nav class="flex-1 p-5">
      <div class="flex justify-between items-center">
        <div class="flex justify-between items-center gap-3">
          <img src="/logo.png" alt="logo" width="30" height="30" />
          <h1 class="text-xl md:text-2xl from-purple-300 via-yellow-500 to-white bg-gradient-to-r bg-clip-text text-transparent font-bold">
            PORTFOLIO
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
