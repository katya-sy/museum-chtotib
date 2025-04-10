import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';

interface Props {
  images: { img: string }[];
}

export const ArticleImgList = ({ images }: Props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 600: 3, 1024: 4 }}>
      <Masonry gutter='16px'>
        {images.map((image) => (
          <div className='flex' key={image.img}>
            <Image
              src={image.img}
              alt='Изображение статьи'
              width={332}
              height={600}
              className='h-auto w-full object-cover'
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
