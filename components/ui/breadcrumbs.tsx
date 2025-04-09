'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/shared/icon';
import { routeLabels } from '@/lib/consts';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;

    const label =
      routeLabels[path] ||
      path
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return { href, label };
  });

  return (
    <nav className='mb-6 flex flex-wrap items-center gap-2 md:mb-8'>
      <div className='flex items-center gap-2'>
        {' '}
        <Link href='/' className='nav-link text-lg normal-case'>
          Главная
        </Link>
        <Icon name='shared/right' className='text-lg text-blue-dark' />
      </div>
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href}>
          {index === breadcrumbs.length - 1 ? (
            <span className='text-lg font-medium text-blue-dark'>
              {breadcrumb.label}
            </span>
          ) : (
            <Link
              href={breadcrumb.href}
              className='nav-link text-lg normal-case'
            >
              {breadcrumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
