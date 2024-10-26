import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import AuthProvider from './AuthProvider';


const Nav = () => {

  const session = false;

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link
          href='/'
        >
          <Image
            src='/logo.svg'
            alt='logo'
            width={115}
            height={45}
          />
        </Link>
        <ul className='xl:flex hidden text-sm gap-7'>
          {NavLinks.map((link)=>(
            <Link
              href={link.href}
              key={link.key}
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        {session?  
        <>
        UserProfile

        <Link
          href='/create-project'
        >
          Upload Project
        </Link>
        </>
        :
        <>
          <AuthProvider/>
        </>
      }
      </div>
    </nav>
  )
}

export default Nav