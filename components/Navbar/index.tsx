import React from "react";
import Link from 'next/link'
import AmaniLogo from "../../public/logo/logo.svg";
import Image from "next/image";
import {menuItems} from './data'


const navbar = () => {
  return (
      <div className="flex justify-center sm:pb-2">
          <div className=" w-screen  fixed  h-12 flex items-center justify-between align-middle z-30  bg-gray-200  bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20   text-gray-200 px-4">
              <div className="my-0 mx-2 min-w-[20px]">
                  <Image alt="amani-logo" src={AmaniLogo} width={20} height={30} />
              </div>

              <div className="w-full hidden sm:block">
                  <ul className="flex flex-row space-x-4 list-none justify-end items-center">
                      {menuItems.map((item,index)=>{
                          return (
                              <li key={index} className="text-sm md:text-normal font-medium tracking-wide">
                                  <Link href={item.link}>
                                      {item.name}
                                  </Link>
                              </li>
                          )
                      })}

                      {/*<li className="btn">contact</li>*/}
                  </ul>
              </div>
          </div>
      </div>

  );
};

export default navbar;
