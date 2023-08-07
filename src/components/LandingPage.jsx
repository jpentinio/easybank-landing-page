import React from "react";
import Button from "./Button";
import mockups from "../assets/images/image-mockups.png";
import { articles, items } from "../constants/constants";

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex h-96 scale-[1.5] md:scale-[2.5] lg:hidden bg-intro-mobile bg-no-repeat bg-center"></div>
      <div className="grid lg:grid-cols-3 lg:h-[95vh] lg:pl-44 bg-very-light-gray lg:gap-8">
        <div className="items-center lg:items-start text-center lg:text-left flex flex-col justify-center py-16 px-6 md:px-12 md:pt-60 lg:p-0 gap-6 sm:gap-10">
          <div className="text-4xl sm:text-6xl text-dark-blue leading-tight font-light">
            Next generation digital banking
          </div>
          <div className="text-grayish-blue text-md sm:text-lg">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </div>
          <Button text="Request invite" />
        </div>
        <div className="hidden sm:flex col-span-2 sm:bg-intro-desktop bg-no-repeat sm:bg-left-bottom scale-1 translate-y-[-50px]"></div>
      </div>
      <img
        src={mockups}
        alt=""
        className="w-full lg:w-fit h-auto md:h-[60vh] lg:h-[125vh] object-contain absolute lg:right-[-120px] top-[-100px] animate-wiggle"
      />
      <div className="text-center lg:text-left py-14 px-6 md:px-24 lg:px-44 lg:py-0 lg:h-screen bg-light-grayish-blue flex flex-col justify-center gap-24">
        <div>
          <div className="text-dark-blue text-3xl sm:text-5xl">
            Why choose Easybank?
          </div>
          <div className="text-grayish-blue text-sm sm:text-lg mt-4 lg:mt-10">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="items-center lg:items-start text-center lg:text-left flex flex-col justify-between gap-8"
            >
              <img
                src={item.icon}
                alt="icon"
                className="w-20 h-20 sm:w-24 sm:h-24"
              />
              <div className="text-xl sm:text-3xl text-dark-blue">
                {item.title}
              </div>
              <div className="text-sm sm:text-lg text-grayish-blue">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-10 lg:px-44 lg:h-screen bg-white flex flex-col justify-center gap-20">
        <div>
          <div className="text-center lg:text-left text-dark-blue text-3xl sm:text-5xl">
            Latest Articles
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {articles.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group rounded-lg flex flex-col shadow-xl shadow-light-grayish-blue"
            >
              <img
                src={item.image}
                alt="icon"
                className="w-full h-60 rounded-t-xl object-cover"
              />
              <div className="p-8 flex flex-col gap-4">
                <div className="text-xs text-grayish-blue">{item.author}</div>
                <div className="text-xl text-dark-blue group-hover:text-lime-green">
                  {item.title}
                </div>
                <div className="text-sm text-grayish-blue">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
