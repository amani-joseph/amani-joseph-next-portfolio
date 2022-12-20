import React from 'react';

const Footer = () => {
    return (
        <div
            name="about"
            className="w-full h-fit text-gray-200 mx-auto relative">
            <div className=" relative flex flex-col  justify-around items-center w-full h-full max-w-[1200px] mx-auto  px-4  ">


                <p className="text-xs md:text-sm font-medium text-gray-300 my-1 ">
                    Designed and built with Love❤️❤️ by Amani-Joseph.{" "}
                </p>
                <p className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-600 my-1 ">
                    Copyright 2022
                </p>
                <p className="text-gray-600 text-xs md:text-sm text-center mb-4">
                    Built with{" "}
                    <a
                        className="hover:text-teal-400 cursor-pointer "
                        href="https://tailwindcss.com">
                        Tailwind-CSS,{" "}
                    </a>{" "}
                    <a
                        className="hover:text-teal-400 cursor-pointer "
                        href="https://reactjs.org/">
                        {" "}
                        ReactJS,
                    </a>{" "}
                    <a
                        className="hover:text-teal-400 cursor-pointer "
                        href="https://getform.io/">
                        Getform.io,{" "}
                    </a>{" "}
                    <a
                        className="hover:text-teal-400 cursor-pointer "
                        href="https://www.framer.com">
                        Framer-Motion ,
                    </a>{" "}
                    <a
                        className="hover:text-teal-400 cursor-pointer "
                        href="https://www.framer.com">
                        :) StackOverflow
                    </a>{" "}
                </p>
            </div>
        </div>
    );
};

export default Footer;
