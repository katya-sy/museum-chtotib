import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
  item: {
    title: string;
    desc?: string;
    img: string;
  };
  size?: 'sm';
  buttonText?: string;
}

export const Card = ({ item, size, buttonText }: Props) => {
  return (
    <div className='group relative md:overflow-hidden'>
      <div className='h-full min-h-[400px] w-full transition-all duration-1000 ease-in-out group-hover:brightness-75 md:min-h-[332px] md:group-hover:translate-y-[-5%]'>
        <Image
          src={item.img}
          alt={item.title}
          width={332}
          height={300}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-beige-gradient p-5'>
        <h4 className='line-clamp-2 text-center text-2xl font-medium text-red-accent'>
          {item.title}
        </h4>
        <div className='overflow-hidden transition-all duration-1000 ease-in-out md:max-h-0 md:group-hover:max-h-[332px]'>
          <div className='flex flex-col gap-5 pt-5'>
            {item.desc && (
              <p className='line-clamp-5 text-red-accent'>{item.desc}</p>
            )}
            <Button asChild>
              <Link href=''>{buttonText || 'Перейти'}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
