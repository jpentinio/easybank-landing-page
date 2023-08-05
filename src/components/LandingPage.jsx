import React from "react";
import Button from "./Button";
import mockups from "../assets/images/image-mockups.png";
import { articles, items } from "../constants/constants";

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className=" grid grid-cols-3 h-[95vh] pl-44 bg-very-light-gray gap-8">
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
        <div className="col-span-2 bg-intro-desktop bg-no-repeat bg-left-bottom scale-1 translate-y-[-50px]"></div>
      </div>
      <img
        src={mockups}
        alt=""
        className="w-fit h-[125vh] object-contain absolute right-[-120px] top-[-100px] animate-wiggle"
      />
      <div className="px-44 h-screen bg-light-grayish-blue flex flex-col justify-center gap-24">
        <div>
          <div className="text-dark-blue text-5xl">Why choose Easybank?</div>
          <div className="text-grayish-blue text-lg mt-10">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col justify-between gap-8">
              <img src={item.icon} alt="icon" className="w-24 h-24" />
              <div className="text-3xl text-dark-blue">{item.title}</div>
              <div className="text-lg text-grayish-blue">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-44 h-screen bg-white flex flex-col justify-center gap-20">
        <div>
          <div className="text-dark-blue text-5xl">Latest Articles</div>
        </div>
        <div className="grid grid-cols-4 gap-10">
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
