import React,{ReactNode} from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer'
const Layout = ({children}: any) => {
    return (
        <div className="min-h-screen w-full bg-gray-900 text-gray-300 py-0 bg-[url('../../public/bg/gradient bg@2x.svg')]">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
