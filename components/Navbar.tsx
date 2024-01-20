import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'Search' },
  { src: '/assets/icons/black-heart.svg', alt: 'Heart' },
  { src: '/assets/icons/user.svg', alt: 'User' },
]

const Navbar = () => {
  return (
    <header className="w-full pb-5">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={150}
            height={70}
            alt="logo"
          />

          {/* <p className="nav-logo">
            Price <span className='text-primary'>Pulse</span>
          </p> */}
        </Link>

        <div className="flex items-center gap-3">
          {/* {navIcons.map((icon) => (
            <Image 
              key={icon.alt }
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))} */}
          {/* #search-component */}

          <Link  href="#search-component" className="flex items-center gap-3">
          <Image 
            src="/assets/icons/search.svg"
            width={28}
            height={28}
            alt="search"
          />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar