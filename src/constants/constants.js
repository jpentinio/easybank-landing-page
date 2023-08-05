import iconBudgeting from "../assets/images/icon-budgeting.svg";
import iconOnboarding from "../assets/images/icon-onboarding.svg";
import iconApi from "../assets/images/icon-api.svg";
import iconOnline from "../assets/images/icon-online.svg";
import imageConfetti from "../assets/images/image-confetti.jpg";
import imageCurrency from "../assets/images/image-currency.jpg";
import imagePlane from "../assets/images/image-plane.jpg";
import imageRestaurant from "../assets/images/image-restaurant.jpg";

export const items = [
  {
    icon: iconOnline,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: iconBudgeting,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits",
  },
  {
    icon: iconOnboarding,
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: iconApi,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier",
  },
];

export const articles = [
  {
    image: imageCurrency,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  },
  {
    image: imageRestaurant,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
  },
  {
    image: imagePlane,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
  },
  {
    image: imageConfetti,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
  },
];
