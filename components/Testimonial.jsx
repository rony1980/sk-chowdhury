import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <>
      <h1 class="mb-8 mt-12 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Testimonials
        </span>{' '}
        from others
      </h1>
      <div className="grid mb-8 border border-gray-200 rounded-md shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 mt-10">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Very easy this was to integrate
            </h3>
            <p className="my-4">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <Image
              className="rounded-full w-9 h-9"
              src="/images/t1.png"
              alt="profile picture"
              width={40}
              height={40}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bonnie Green</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p className="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <Image
              className="rounded-full w-9 h-9"
              src="/images/t2.png"
              alt="profile picture"
              width={40}
              height={40}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Mindblowing workflow
            </h3>
            <p className="my-4">
              Aesthetically, the well designed components are beautiful and will
              undoubtedly level up your next application."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <Image
              className="rounded-full w-9 h-9"
              src="/images/t3.png"
              alt="profile picture"
              width={40}
              height={40}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Efficient Collaborating
            </h3>
            <p className="my-4">
              You have many examples that can be used to create a fast prototype
              for your team."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <Image
              className="rounded-full w-9 h-9"
              src="/images/t4.png"
              alt="profile picture"
              width={40}
              height={40}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Joseph McFall</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                CTO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Testimonial;
