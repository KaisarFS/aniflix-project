import React from 'react';

const Footer = () => {
    return(
        <>
            <footer className="flex flex-col md:flex-row justify-around items-start md:items-center bg-bg-aniflix-semi py-7 px-10 h-[300px] mt-4">
                <div className="">
                    <a href="/" className="text-2xl font-bold text-aniflix">
                        Aniflix
                    </a>
                    <div className="">
                        <p className="text-sm font-medium text-gray-500 pt-4">
                            © {new Date().getFullYear()} Aniflix | @kaisarfs
                        </p>
                    </div>
                </div>
                <div className="navigation md:flex justify-evenly hidden text-white">
                    <ul className="navi px-10">
                        <li>
                            <a className="font-semibold hover:text-aniflix transition-all" href="/">Home</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-aniflix transition-all" href="/completed">Completed</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-aniflix transition-all" href="/ongoing">Ongoing</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;