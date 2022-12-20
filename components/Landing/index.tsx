import React from 'react';
import Link from "next/link";

const Landing = () => {
    return (
        <div className="max-w-[700px] min-h-[60vh] px-4 md:m-auto flex flex-col h-full justify-start  ">
            <div className={'mt-24 pt-8'} >
                <p className="text-xs font-bold ">Hi there, my name is</p>
                <p className="font-bolder text-2xl md:text-5xl ">Amani Joseph</p>
            </div>

            <p className={`text-sm max-w-[500px] my-8`}>I’m a fullstack software engineer specializing in building exceptional digital
                experiences.Currently, I’m focused on building human-centered products and payment infrastructures for
                the sub-saharan African region at <span className="font-bold text-pink-600"><Link href="ipayafrica.com">iPay Africa</Link></span> .
            </p>


            <div className="flex flex-row justify-between">
                <button className="btn py-1 border border-teal-400">Say Hello</button>
            </div>

        </div>
    );
};

export default Landing;
