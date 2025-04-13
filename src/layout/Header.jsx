'use client';

import Link from "next/link";
import MainLogo from "@/components/MainLogo";
import {useCallback, useState} from "react";


const Header = () => {
    const [activeType, setActiveType] = useState('home');
    const handleChange = useCallback((activeType) => {
        return () => {
            setActiveType(activeType);
        }
    },[]);
    
    return <header className="fixed top-0 right-0 left-0 z-50 bg-[#000000b8]">
        <div className={`flex items-center w-full h-15 justify-between
    text-[#979797] text-2xl font-semibold container mx-auto`}>
            <h1 className={`pt-[2px] ml-[-12px]`}>
                <Link href={'/'}>
                    <MainLogo/>
                </Link>
            </h1>
            <nav>
                <ul className={`flex gap-8`}>
                    <li className={`hover:text-white ${activeType === 'home' && 'active'}`} onClick={handleChange('home')}><Link href={'/'}>Home</Link></li>
                    <li className={`hover:text-white ${activeType === 'about' && 'active'}`} onClick={handleChange('about')}><Link href={'/about'}>회사 소개</Link></li>
                    <li className={`hover:text-white ${activeType === 'portfolio' && 'active'}`} onClick={handleChange('portfolio')}><Link href={'/portfolio'}>포트폴리오</Link></li>
                    <li className={`hover:text-white ${activeType === 'contact' && 'active'}`} onClick={handleChange('contact')}><Link href={'/contact'}>문의하기</Link></li>
                </ul>
            </nav>
        </div>
    </header>
}


export default Header;