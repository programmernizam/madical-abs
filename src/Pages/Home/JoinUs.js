import React from "react";

const JoinUs = () => {
  return (
    <section className="bg-base-200 py-40">
      <div className="container mx-auto px-3 lg:px-0">
        <div class="mb-20 text-center">
          <h4 className="font-bold text-[#8D5CF6]">Newsletter</h4>
          <h1 class="text-4xl font-bold mb-4 text-gray-900">JOIN US</h1>
          <p class="leading-relaxed text-base">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div>
          <form className="text-center">
            <input
              type="email"
              placeholder="email address"
              className="input rounded-none rounded-l-md bg-gray-100 input-bordered w-60 lg:w-96"
            />
            <input
              type="submit"
              className="btn bg-[#8D5CF6] border-none rounded-none rounded-r-md px-10"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
