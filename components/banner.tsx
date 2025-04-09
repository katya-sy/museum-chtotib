'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

export const Banner = ({
  banners,
}: {
  banners: { img: string; title: string }[];
}) => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Fade(),
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {banners.map((b, i) => (
          <CarouselItem
            className='relative h-[300px] md:h-[600px]'
            key={b.img + i}
          >
            <Image
              src={b.img}
              alt='Изображение ЧТОТиБ'
              width={1376}
              height={600}
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 flex h-full items-center justify-center bg-[#53401F]/50 p-5 md:p-10'>
              <h2 className='text-center text-3xl font-semibold text-[#F2E0C9] md:text-5xl'>
                {b.title}
              </h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
