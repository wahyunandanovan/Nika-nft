import React  from "react";
import { Outlet } from 'react-router-dom'
import Iconify from "../components/Iconify";
import { palette } from "../utils/pallete";


const DashboardLayout = () => {
  const [open, setOpen] = React.useState(true);
  const Menus = [
    { title: "Market", src: "icon-park-twotone:market-analysis" },
    { title: "Active Bids", src: "bx:bar-chart-alt-2" },
    { title: "Explore", src: "carbon:explore" },
    { title: "Accounts", src: "ic:outline-account-circle", gap: true },
    { title: "History", src: "ic:baseline-history-edu" },
    { title: "My Favourite", src: "ic:baseline-favorite-border" },
    { title: "Notification", src: "carbon:notification" },
    { title: "Setting", src: "ant-design:setting-outlined" },
  ];

  

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } h-screen p-5  pt-8 relative duration-300`}
        style={{background:palette.gradient.bg}}
      >
        <img
          src="../../src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="../../src/assets/logo.svg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Nika nft
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
                <Iconify icon={Menu.src} width={18.33} height={18.33} color="#989898" />
              <span className={`${!open && "hidden"} origin-left duration-200 text-deep-white  font-bold` }>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    <Outlet/>
    </div>
  );
};
export default DashboardLayout;