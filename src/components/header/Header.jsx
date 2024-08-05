"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
//========== Import Components
import CTA from "@/components/cta/CTA";
//========== Import Icons
import { FaAngleDoubleLeft, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMegaMenuOpen2, setIsMegaMenuOpen2] = useState(false);
    // ========= Header Fixed
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // ========= Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // ========= MegaMenu1
    const toggleMegaMenu = () => {
        setIsMegaMenuOpen(!isMegaMenuOpen);
    };
    // ========= MegaMenu2
    const toggleMegaMenu2 = () => {
        setIsMegaMenuOpen2(!isMegaMenuOpen2);
    };

    return (

        <header className={`w-full z-[999] rounded-none h-[80px] flex items-center ${isFixed ? 'fixed top-0 left-0 w-full bg-white shadow-md duration-1000 ease-in-out' : 'static duration-1000 ease-in-out'}`}>
            <div className="container h-full flex items-center">
                <nav className="w-full h-full flex items-center justify-between mx-auto bg-transparent">
                    <div className="w-full lg:w-auto h-full flex flex-wrap items-center justify-between">
                        <a href="/" className="h-full flex items-center text-[24px] font-bold font-sans text-black cursor-pointer lg:w-[160px] xl:w-[180px] lg:ml-2">
                            Brand Name
                        </a>
                        <div className={`w-[85%] md:w-[80%] lg:w-auto h-[100vh] lg:h-full flex items-center fixed top-0 z-50 lg:static bg-[#484848] lg:bg-transparent ${isMenuOpen ? 'left-0 duration-700 ease-in-out' : 'left-[-100%] duration-700 ease-in-out'}`} id="navbar-default">
                            <ul className="w-full h-full flex lg:items-center flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-6 xl:space-x-10 rtl:space-x-reverse p-5 lg:p-0 relative">
                                <Link href="/" className="text-[34px] font-bold font-sans text-white cursor-pointer block lg:hidden">
                                    Brand Name
                                </Link>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="#" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium font-poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMenu}>Home</Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center group">
                                    <Link href="#" className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium font-poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMegaMenu}>
                                        <span>Services</span>
                                        <FaAngleDown className="mt-[1px]" />
                                    </Link>
                                    <div className="w-full h-full lg:h-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 rounded-none lg:rounded-xl absolute top-0 lg:top-[-1150%] left-[-100%] lg:left-[4%] group-hover:left-[0%] lg:group-hover:top-[100%] duration-1000 ease-in-out bg-black">
                                        <div className="w-full flex lg:hidden items-center justify-between mb-5">
                                            <Link href="/" className="text-left text-[34px] font-bold font-sans text-white cursor-pointer block lg:hidden" onClick={toggleMenu}>
                                                Brand Name
                                            </Link>
                                            <FaAngleDoubleLeft className="text-[30px] text-white" onClick={toggleMegaMenu} />
                                        </div>
                                        <ul className="flex flex-col space-y-10 lg:space-y-5 w-full mb-5 lg:mb-0">
                                            <li className="cursor-pointer">
                                                <Link href="/mobile-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Mobile App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/game-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Game App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/blockchain-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Blockchain Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/artificial-intelligence" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Artificial Intelligence</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/web-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Web App Development</Link>
                                            </li>
                                        </ul>
                                        <ul className="flex flex-col space-y-10 lg:space-y-5 w-full">
                                            <li className="cursor-pointer">
                                                <Link href="/business-intelligence" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Business Intelligence</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/web-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Web Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/uiux-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    UI UX App Design</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/ios-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Ios App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/android-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Android App Development</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="lg:h-full flex lg:items-center group">
                                    <Link href="#" className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium font-poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMegaMenu2}>
                                        <span>Our Work</span>
                                        <FaAngleDown className="mt-[1px]" />
                                    </Link>
                                    <div className="w-full h-full lg:h-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 rounded-none lg:rounded-xl absolute top-0 lg:top-[-1150%] left-[-100%] lg:left-[4%] group-hover:left-[0%] lg:group-hover:top-[100%] duration-1000 ease-in-out bg-black">
                                        <div className="w-full flex lg:hidden items-center justify-between mb-5">
                                            <Link href="/" className="text-left text-[34px] font-bold font-sans text-white cursor-pointer" onClick={toggleMenu}>
                                                Brand Name
                                            </Link>
                                            <FaAngleDoubleLeft className="text-[30px] text-white" onClick={toggleMegaMenu2} />
                                        </div>
                                        <ul className="flex flex-col space-y-10 lg:space-y-5 w-full">
                                            <li className="cursor-pointer">
                                                <Link href="/business-intelligence" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Business Intelligence</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/web-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Web Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/uiux-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    UI UX App Design</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/ios-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Ios App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/android-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Android App Development</Link>
                                            </li>
                                        </ul>
                                        <ul className="flex flex-col space-y-10 lg:space-y-5 w-full mb-5 lg:mb-0">
                                            <li className="cursor-pointer">
                                                <Link href="/mobile-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Mobile App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/game-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Game App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/blockchain-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Blockchain Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/artificial-intelligence" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Artificial Intelligence</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/web-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Web App Development</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="#" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium font-poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMenu}>About</Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="#" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium font-poppins text-white lg:text-black hover:text-primary-100" onClick={toggleMenu}>Contact</Link>
                                </li>
                                <div className="w-max flex lg:hidden items-center gap-2 bg-[#DFDFDF] p-1 rounded-[15px]">
                                    <CTA
                                        text="Get To Know Us"
                                        href="javascript:;"
                                    />
                                    <CTA
                                        text="Get A Quote"
                                        bg="bg-black text-white"
                                    />
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-2 bg-[#DFDFDF] p-1 rounded-[15px]">
                        <CTA
                            text="Get To Know Us"
                            href="javascript:;"
                        />
                        <CTA
                            text="Get A Quote"
                            bg="bg-black text-white"
                        />
                    </div>
                    <div className="block lg:hidden w-max9">
                        {isMenuOpen ? (
                            <FaTimes className="text-[30px] cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <FaBars className="text-[30px] cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Header;



