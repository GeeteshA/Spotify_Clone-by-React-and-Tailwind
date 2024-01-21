import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "components/Icons";

export default function Collection() {
  const items = [
    {
      id: 1,
      title: "Ghost",
      artist: "Diljit Dosanjh",
      image: "https://i.scdn.co/image/ab67616d00001e02cb2f9520171129a3df7a241a",
    },

    {
      id: 2,
      title: "Moosetape",
      artist: "Sidhu Moose Wala",
      image: "https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae",
    },

    {
      id: 3,
      title: "Husn",
      artist: "Anuv Jain",
      image: "https://i.scdn.co/image/ab67616d00001e020d3449f333a83a25feb423f8",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl text-white font-bold tracking-tight mb-4">
        
      </h3>

      <div className="grid grid-cols-1 gap-x-4">
        <div className="h-[296px] bg-gradient-to-r from-gra3 to-gra4 rounded p-6 group relative">
          <div className="mt-20 pr-4">
            <span className="text-sm font-semibold">O Maahi</span>{" "}
            <span className="opacity-70"> • Arijit Singh </span>
            <span className="text-sm font-semibold">Satranga</span>{" "}
            <span className="opacity-70"> • Animal </span>
            <span className="text-sm font-semibold">Chaleya</span>{" "}
            <span className="opacity-70"> • Jawaan <br/></span>
            <span className="text-sm font-semibold"> Husn</span>{" "}
            <span className="opacity-70"> • Anuv Jain </span>
            <span className="text-sm font-semibold">Dil Haareya</span>{" "}
            <span className="opacity-70"> • Arijit Singh </span>

          </div>
          <div>
            <h3 className="text-3xl font-bold mt-6">Popular Songs</h3>
            <p>Weekly Tracks</p>
          </div>
          <button className="w-12 h-12 bg-primary absolute right-4 bottom-4 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
            <Icon name="play" />
          </button>
        </div>

        <div className="grid">
          <div className="flex gap-x-4">
            {items.map((item) => (
              <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
