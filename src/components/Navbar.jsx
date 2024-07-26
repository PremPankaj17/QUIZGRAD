
const Navbar = () => {
  return (
    <header className="h-16 flex items-center shadow-sm">
    <nav className="flex justify-between items-center w-9/12 mx-auto">
      <a href="/" className="text-zinc-800 font-bold uppercase">
        <img src="/images/logo.png" alt="logo" />
      </a>
      <div className="space-x-5 flex items-center">
        <ul className="space-x-5 sm:flex hidden">
        <li className="hover:text-yellow-500"><a href="/">Home</a></li>
          <li className="hover:text-yellow-500"><a href="/">About us</a></li>
          <li className="hover:text-yellow-500"><a href="/">Contact</a></li>
        </ul>
        
      </div>
    </nav>
  </header>
  )
}

export default Navbar