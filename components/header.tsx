import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='bg-beige/50 py-5 md:py-4'>
      <div className='container flex flex-wrap items-center justify-between gap-8'>
        <Link href='/' className='flex'>
          <Image
            src='/logo.png'
            alt='Логотип виртуального музея ЧТОТиБ'
            width={107}
            height={100}
          />
        </Link>
        <nav>
          <ul className='flex flex-wrap items-baseline gap-x-8 gap-y-4'>
            <li>
              <Link href='/history' className='nav-link'>
                История развития
              </Link>
            </li>
            <li>
              <Link href='/traditions' className='nav-link'>
                Традиции
              </Link>
            </li>
            <li>
              <Link href='/teachers' className='nav-link'>
                Преподаватели
              </Link>
            </li>
            <li>
              <Link href='/graduates' className='nav-link'>
                Выпускники
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
