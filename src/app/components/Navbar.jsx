'use client'

import Link from "next/link"
import Image from "next/image";
import { useLayoutEffect, useEffect, useState } from "react"
import { usePathname } from 'next/navigation';
import { sailorsRegular, sneakoutRegular } from "../styles/fonts"

export default function Navbar() {

    useEffect(() => {
        import('preline')
        }, [])


        const [isSmallScreen, setisSmallScreen] = useState(false);
  
        const location = usePathname();
        const inactiveColorClass = 'text-grey-500';
        const contactExcludedPaths = ['/', '/contact', '/contact/confirmation'];

        useLayoutEffect(() => {
            const handleResize = () => {
            setisSmallScreen(window.innerWidth <= 704);
            };

            window.addEventListener('resize', handleResize);
            handleResize();

            return () => {
            window.removeEventListener('resize', handleResize);
            };
        }, []);

    return (
        <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-lightblue-500 text-sm py-3 sm:py-0">
            <nav className={`${sailorsRegular.className} relative w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8`} aria-label="Global">

                <div className="sm:hidden flex items-center justify-between border border-red-500">
                    <div className=''>
                        <Link className="" href="/">
                            <Image 
                                src="/images/team-oregon-logo.png"
                                width={250}
                                height={48}
                                alt='Team Oregon logo'
                                priority={true}
                                >
                            </Image>
                        </Link>
                    </div>
                    
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle p-0 inline-flex justify-center items-center rounded-md  bg-white align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-cyan-420 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-6 h-6" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-6 h-6" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="border border-green-400 flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center  sm:gap-y-0 sm:gap-x-7 sm:mt-0">
                        <Link 
                        className={`hover:text-cyan-420 ${(location !== '/') && inactiveColorClass}`}
                        href="/"
                        {...(isSmallScreen && {
                            'data-hs-collapse': '#navbar-collapse-with-animation',
                            'aria-controls': 'navbar-collapse-with-animation',
                            'aria-label': 'Toggle navigation'
                        })}>
                        About
                        </Link>

                        <Link 
                        className={`hover:text-cyan-420 sm:py-6 ${(location !== '/sponsors' && location !== '/') && inactiveColorClass}`}
                        href="/sponsors"
                        {...(isSmallScreen && {
                            'data-hs-collapse': '#navbar-collapse-with-animation',
                            'aria-controls': 'navbar-collapse-with-animation',
                            'aria-label': 'Toggle navigation'
                        })}>
                        Sponsors
                        </Link>

                        <Link 
                        className={`hover:text-cyan-420 sm:py-6 ${(location !== '/team' && location !== '/') && inactiveColorClass}`}
                        href="/team"
                        {...(isSmallScreen && {
                            'data-hs-collapse': '#navbar-collapse-with-animation',
                            'aria-controls': 'navbar-collapse-with-animation',
                            'aria-label': 'Toggle navigation'
                        })}>
                        Team
                        </Link>
                    </div>
                </div>
            
                <div className="hidden sm:block items-center justify-between border border-red-500">
                    <div className='flex sm:w-[250px] md:w-[368px]'>
                        <Link className="" href="/">
                            <Image 
                                src="/images/team-oregon-logo.png"
                                width={368}
                                height={48}
                                alt='Team Oregon logo'
                                priority={true}
                                >
                            </Image>
                        </Link>
                    </div>
                    
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle p-0 inline-flex justify-center items-center rounded-md  bg-white align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-cyan-420 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-6 h-6" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-6 h-6" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="border border-green-400 flex flex-col gap-y-4 gap-x-0 mt-3 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                        <Link 
                            className={`hover:text-cyan-420 sm:py-6 ${(location !== '/join' && location !== '/') && inactiveColorClass}`}
                            href="/join"
                            {...(isSmallScreen && {
                                'data-hs-collapse': '#navbar-collapse-with-animation',
                                'aria-controls': 'navbar-collapse-with-animation',
                                'aria-label': 'Toggle navigation'
                            })}>
                            Join The Team
                        </Link>

                        <Link 
                            className={`hover:text-cyan-420 sm:py-6 ${!contactExcludedPaths.includes(location) && inactiveColorClass}`}
                            href="/contact" 
                            {...(isSmallScreen && {
                                'data-hs-collapse': '#navbar-collapse-with-animation',
                                'aria-controls': 'navbar-collapse-with-animation',
                                'aria-label': 'Toggle navigation'
                            })}>
                            Contact
                        </Link>
                        
                        <Link 
                            className={`hover:text-cyan-420 sm:py-6 ${!contactExcludedPaths.includes(location) && inactiveColorClass}`}
                            href="/contact" 
                            {...(isSmallScreen && {
                                'data-hs-collapse': '#navbar-collapse-with-animation',
                                'aria-controls': 'navbar-collapse-with-animation',
                                'aria-label': 'Toggle navigation'
                            })}>
                            Log In
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}