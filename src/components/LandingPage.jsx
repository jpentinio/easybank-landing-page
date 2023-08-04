import React from "react";
import Button from "./Button";
import mockups from "../assets/images/image-mockups.png";

const LandingPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden grid grid-cols-3 h-[95vh] pl-44 bg-very-light-gray gap-8">
        <div className="flex flex-col justify-center gap-10">
          <div className="text-6xl text-dark-blue leading-tight font-light">
            Next generation digital banking
          </div>
          <div className="text-grayish-blue text-lg">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </div>
          <Button text="Request invite" />
        </div>
        <div className="col-span-2 bg-intro-desktop bg-left-bottom scale-1 translate-y-[-50px]"></div>
        <img
          src={mockups}
          alt=""
          className="w-fit h-[125vh] object-contain absolute right-[-120px] top-[-100px]"
        />
      </div>
    </div>
  );
};

export default LandingPage;
