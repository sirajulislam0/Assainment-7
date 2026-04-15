'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";


const NavBar = () => {

    const pathname = usePathname()
    

    const links = <>

        <li><Link className={`link  no-underline ${pathname === '/' ? 'bg-[#244d3f]' : ' text-[#64748b]'}`} href="/"> <RiHome2Line />Home</Link></li>
        <li><Link className={`link no-underline ${pathname === '/timeline' ? 'bg-[#244d3f]' : ' text-[#64748b]'}`} href="/timeline"> <IoTimeOutline />Timeline</Link></li>
        <li><Link className={`link no-underline ${pathname === '/stats' ? 'bg-[#244d3f]' : ' text-[#64748b]'}`} href="/stats" ><ImStatsDots />Stats</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Image
                    src="/logo.png"
                    alt="this is facebook"
                    width={150}
                    height={50}
                />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-white gap-2 ">

                    {links}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;