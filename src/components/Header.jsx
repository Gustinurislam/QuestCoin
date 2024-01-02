import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import navbar from '../../data/navbar.json'
import navbarGif from "../../data/navbarGif.json"
import navbarTitle from "../../data/navbarTitle.json"

const Header = () => {
    return (
        <>
            <header className="font-display bg-[url('../../public/img/island.png')] bg-no-repeat bg-cover h-screen">
                <nav className="flex justify-between w-full px-20 py-8 fixed z-10">
                    <ul className="flex items-center space-x-6">
                        {navbarGif.map(({ id, gif }) => (
                            <li key={id}><img src={gif} alt="coin" className="w-8 h-8" /></li>
                        ))}
                        {navbar.map(({ id, title, link }) => (
                            <li key={id} className="cursor-pointer"><Link to={link}>{title} &#10095;
                            </Link></li>
                        ))}
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
                        {navbarTitle.map(({ id, title, slug, gif, escape }) => (
                            <>
                                <h1 key={id} className="flex items-center text-8xl relative">
                                    <span className='text-5xl absolute -top-2 -left-5 -rotate-45'>&#9819;</span> {title}<span><img src={gif} alt="coin" className="w-[75px] h-[75px] border" /></span>{escape}
                                </h1>
                                <p className="text-xl">{slug}</p>
                            </>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
