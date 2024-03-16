const Navbar = () => {
    return (
        <div className="mb-[50px] navbar font-lexend mt-1 px-[10px] md:px-[100px] lg:px-[100px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden pl-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      </ul>
    </div>
    <a className="text-[32px] font-bold">Chillies</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16px]">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">

  <label className="input input-bordered flex items-center gap-2 rounded-full hidden lg:flex">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="" placeholder="Search" />
</label>
    
    <svg className="bg-green-400 rounded-full" width="36.000000" height="36.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip3_244">
			<rect id="Frame" width="32.000000" height="32.000000" fill="white" fillOpacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" width="32.000000" height="32.000000" fill="#FFFFFF" fillOpacity="0"/>
	<g clipPath="url(#clip3_244)">
		<path id="Vector" d="M23.97 24.96C23.04 23.73 21.83 22.73 20.45 22.04C19.07 21.35 17.54 20.99 15.99 21C14.45 20.99 12.92 21.35 11.54 22.04C10.16 22.73 8.95 23.73 8.02 24.96M27.65 18.85C28.23 16.49 28.08 14 27.21 11.73C26.35 9.45 24.81 7.5 22.81 6.12C20.8 4.74 18.43 4 15.99 4C13.56 4 11.19 4.74 9.18 6.12C7.18 7.5 5.64 9.45 4.78 11.73C3.91 14 3.76 16.49 4.34 18.85C4.92 21.21 6.2 23.34 8.02 24.96C10.21 26.92 13.05 28 15.99 28C18.94 28 21.78 26.92 23.97 24.96C25.79 23.34 27.07 21.21 27.65 18.85ZM18.82 15.82C18.07 16.57 17.06 17 15.99 17C14.93 17 13.92 16.57 13.17 15.82C12.42 15.07 11.99 14.06 11.99 13C11.99 11.93 12.42 10.92 13.17 10.17C13.92 9.42 14.93 9 15.99 9C17.06 9 18.07 9.42 18.82 10.17C19.57 10.92 19.99 11.93 19.99 13C19.99 14.06 19.57 15.07 18.82 15.82Z" stroke="#150B2B" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round"/>
	</g>
</svg>

  </div>
</div>
    );
};

export default Navbar;