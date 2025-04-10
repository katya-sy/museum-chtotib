'use client';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { DescBlock } from '@/components/desc-block';
import { ArticleImgList } from '@/components/article-img-list';

const content = {
  title: 'Название статьи',
  desc:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.\n' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

const images = [
  { img: '/banner.png' },
  { img: '/banner.png' },
  { img: '/logo.png' },
  { img: '/banner.png' },
  { img: '/banner.png' },
  { img: '/logo.png' },
  { img: '/logo.png' },
  { img: '/banner.png' },
  { img: '/logo.png' },
  { img: '/logo.png' },
  { img: '/banner.png' },
];

export default function Article({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const { slug, id } = params;
  const paths = [
    { href: '/history', label: 'История развития' },
    { href: `/history/${id}`, label: `1960-е годы` },
    { href: `/history/${id}/${slug}`, label: `Название статьи` },
  ];

  return (
    <div>
      <Breadcrumbs paths={paths} />
      <DescBlock
        className='max-w-[912px]'
        title={content.title}
        desc={content.desc}
      />
      <div className='mt-16 md:mt-24'>
        <ArticleImgList images={images} />
      </div>
    </div>
  );
}
