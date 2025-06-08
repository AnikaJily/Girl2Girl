"use client";
import * as React from "react";

export const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center px-16 py-4 w-full bg-stone-50 text-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex relative flex-col self-stretch px-14 my-auto w-32 text-4xl whitespace-nowrap aspect-[2.723] border-neutral-800">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7c68a3-5d76-4b94-b977-89e3ece1b7c0?placeholderIfAbsent=true&apiKey=10f7e0b15baa4f05a0bef263ffc6eb14"
            className="object-cover absolute inset-0 size-full"
            alt="Girl2Girl Logo"
          />
          girl2girl
        </div>
        <nav className="flex flex-wrap gap-10 items-center self-stretch my-auto text-base min-w-60 max-md:max-w-full">
          <a href="#" className="self-stretch my-auto underline">
            Главная
          </a>
          <a href="#" className="self-stretch my-auto underline">
            О нас
          </a>
          <a href="#" className="self-stretch my-auto underline">
            Волонтерство в проекте
          </a>
          <button className="gap-2.5 self-stretch px-7 py-1 my-auto text-2xl bg-indigo-600 rounded-2xl min-h-[39px] text-stone-50 w-[229px] max-md:px-5">
            Мне нужна помощь
          </button>
        </nav>
      </div>
    </header>
  );
};
