import { useScrollPosition } from '@/hooks/useScrollPosition';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const onScrollStyle =
    scrollPosition > 10
      ? 'border-sky-500 shadow bg-cyan-500 py-2'
      : 'py-4 border-gray-300 bg-primary';

  return (
    <header
      className={`${onScrollStyle} sticky top-0 bg-opacity-10 text-primary backdrop-blur transition-all`}
      style={{ zIndex: '1100' }}
    >
      <div className='container flex justify-between items-center gap-4'>
        <div className='flex-1'>
          <Link href='/' className='text-2xl'>
            Free Park
          </Link>
        </div>
        <div className='flex-1 hidden md:block'>
          <Link
            href='/about'
            className='text-gray-500 hover:text-primary hover:font-semibold'
          >
            About Us
          </Link>
        </div>
        <div className='flex-none'>
          <Link href='/join-us' className='btn btn-sm btn-primary capitalize'>
            Join Us
          </Link>
        </div>
        <div className='flex-none block md:hidden'>
          <IoMdMenu className='text-3xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;
