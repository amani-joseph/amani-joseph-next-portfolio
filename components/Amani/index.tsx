import React from 'react';
import Layout from "../Layout";
import Landing from "../Landing";
import About from "../About";

const Amani = () => {
    return (
        <Layout>
            <div className="relative  w-full">
                <div className="min-h-screen ">
                    <Landing />
                </div>
                <div className="min-h-screen border border-t-green-500 ">
                    <About/>
                </div>
                {/*<div className="min-h-screen border border-t-green-500"></div>*/}
                {/*<div className="min-h-screen border border-t-green-500"></div>*/}
                {/*<div className="min-h-screen border border-t-green-500"></div>*/}



            </div>
        </Layout>
    );
};

export default Amani;
