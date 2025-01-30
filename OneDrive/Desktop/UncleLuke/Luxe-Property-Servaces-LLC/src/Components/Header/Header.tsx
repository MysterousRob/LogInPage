import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center bg-black text-white px-5 py-3">
            <div className="text-center md:text-">
                <h1 className="text-4xl font-bold">Luxe-Property Services</h1>
                <p className="text-2xl">Exclusive property management and maintenance</p>
            </div>
            <nav className="flex space-x-4">
                <button className="bg-white text-black rounded-full px-4 py-2 text-sm hover:bg-gray-200 transition">
                    About
                </button>
                <button className="bg-white text-black rounded-full px-4 py-2 text-sm hover:bg-gray-200 transition">
                    Services
                </button>
                <button className="bg-white text-black rounded-full px-4 py-2 text-sm hover:bg-gray-200 transition">
                    Contact
                </button>
            </nav>
        </header>
    )
}

export default Header;