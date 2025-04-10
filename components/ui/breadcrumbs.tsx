'use client';
import Link from 'next/link';
import { Icon } from '@/components/shared/icon';

interface Props {
  paths: {
    href: string;
    label: string;
  }[];
}

export const Breadcrumbs = ({ paths }: Props) => {
  return (
    <nav className='mb-6 flex flex-wrap items-center gap-2 md:mb-8'>
      <div className='flex items-center gap-2'>
        <Link href='/' className='nav-link text-lg normal-case'>
          Главная
        </Link>
        <Icon name='shared/right' className='text-lg text-blue-dark' />
      </div>
      {paths.map((breadcrumb, index) => (
        <div key={breadcrumb.href}>
          {index === paths.length - 1 ? (
            <span className='text-lg font-medium text-blue-dark'>
              {breadcrumb.label}
            </span>
          ) : (
            <div className='flex items-center gap-2'>
              <Link
                href={breadcrumb.href}
                className='nav-link text-lg normal-case'
              >
                {breadcrumb.label}
              </Link>
              <Icon name='shared/right' className='text-lg text-blue-dark' />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
