'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  item: {
    id?: number;
    title: string;
    desc?: string;
    img: string;
  };
  sm?: boolean;
  buttonText?: string;
}

export const Card = ({ item, sm, buttonText }: Props) => {
  const pathname = usePathname();

  return (
    <div className='group relative md:overflow-hidden'>
      <div
        className={`h-full ${sm ? 'min-h-[200px] xs:min-h-[250px]' : 'min-h-[400px]'} w-full transition-all duration-1000 ease-in-out group-hover:brightness-75 md:min-h-[332px] md:group-hover:translate-y-[-5%]`}
      >
        <Image
          src={item.img}
          alt={item.title}
          width={332}
          height={300}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-beige-gradient p-3 md:p-5'>
        <h4
          className={`${sm ? 'text-lg' : 'text-xl'} line-clamp-2 text-center font-medium text-red-accent max-md:break-words md:text-2xl`}
        >
          {item.title}
        </h4>
        <div
          className={`${!item.desc ? 'max-md:hidden' : ''} overflow-hidden transition-all duration-1000 ease-in-out md:max-h-0 md:group-hover:max-h-[332px]`}
        >
          <div className='flex flex-col gap-5 pt-3 md:pt-5'>
            {item.desc && (
              <p
                className={`${sm ? 'line-clamp-2' : 'line-clamp-4'} text-red-accent md:line-clamp-5`}
              >
                {item.desc}
              </p>
            )}
            <Button className='max-md:hidden' asChild>
              <Link href={`${pathname}/${item.id}`}>
                {buttonText || 'Перейти'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Link
        className='absolute inset-0 md:hidden'
        href={`${pathname}/${item.id}`}
      />
    </div>
  );
};
