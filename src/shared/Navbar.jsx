import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">MyLogo</div>
          <div className="hidden md:flex md:space-x-6">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">About</a>
            <a href="#" className="text-white hover:text-gray-200">Services</a>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">Home</a>
            <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">About</a>
            <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">Services</a>
            <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;