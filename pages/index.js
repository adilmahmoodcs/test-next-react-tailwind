/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
}

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-hero-teal to-hero-dark">
      <div className=" bg-[url('../assets/Rectangle.svg')] bg-repeat-x bg-auto">
        <div className="flex justify-center items-center bg-[url('../assets/Hero-comb-bg.svg')] bg-no-repeat bg-center h-114 lg:h-114 xl:h-128">
          <div className="mt-12">
            <h2 className="font-bold text-4xl md:text-7xl text-white text-center">
              Delivering Purpose
              <br />
              Driven Data
            </h2>
            <p className="font-normal text-base sm:text-lg lg:text-xl text-white text-center mt-8">
              Transaction 360 (T360 ) is bringing to the market a revolutionary
              <br />
              approach to address major industry data issues.
            </p>

            <div className="flex justify-center gap-5 mt-10 sm:mt-20">
              <button className="bg-white text-dark-800 font-medium cursor-pointer text-base rounded-md px-6 py-4 border border-white hover:bg-gray-300 active:bg-gray-400 transition duration-300">
                Get Started
              </button>
              <button className="text-white font-medium text-base rounded-md px-6 py-4 border-2 hover:bg-white hover:text-black active:bg-gray-400 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
