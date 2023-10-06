import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">ToDo TASK</span>
          </Link>
          {/* <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
						<Link className='mr-5 hover:text-gray-900'>Tables</Link>
						<Link className='mr-5 hover:text-gray-900'>Second Link</Link>
						<Link className='mr-5 hover:text-gray-900'>Third Link</Link>
						<Link className='mr-5 hover:text-gray-900'>Fourth Link</Link>
					</nav> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
