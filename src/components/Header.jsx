import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="font-display bg-[url('../../public/img/island.png')] bg-no-repeat bg-cover h-screen">
                <nav className="flex justify-between w-full px-20 py-8 fixed z-10">
                    <ul className="flex items-center space-x-6">
                        <li><img src="../../public/gif/coin1.gif" alt="coin" className="w-8 h-8" /></li>
                        <li className="cursor-pointer"><Link to='/'>HOME &#10095;
                        </Link></li>
                        <li className="cursor-pointer"><Link to='map'>MAP &#10095;</Link></li>
                        <li className="cursor-pointer">TIMELINE &#10095;</li>
                        <li className="cursor-pointer">QUEST &#10095;</li>
                        <li className="cursor-pointer">WHITEPAPER &#10095;</li>
                    </ul>
                    <ul className="flex items-center space-x-6">
                        <li className="cursor-pointer">
                            <FaXTwitter size={20} />
                        </li>
                        <li className="cursor-pointer">
                            <FaTelegram size={20} />
                        </li>
                    </ul>
                </nav>

                <div className="flex justify-center pt-24 -z-10">
                    <div className="flex flex-col items-center">
                        <h1 className="flex items-center text-8xl relative">
                            <span className='text-5xl absolute -top-2 -left-5 -rotate-45'>&#9819;</span> QUESTC<span><img src="../../public/gif/coin1.gif" alt="coin" className="w-[75px] h-[75px]" /></span>IN
                        </h1>
                        <p className="text-xl">YOUR JOURNEY TO DIGITAL RICHES</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
