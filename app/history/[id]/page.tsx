import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { DescBlock } from '@/components/desc-block';
import { Card } from '@/components/card';

const content = {
  title: '1960-е годы',
};

const sections = [
  {
    id: 1,
    title: 'Название статьи 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/banner.png',
  },
  {
    id: 2,
    title: 'Название статьи 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/banner.png',
  },
  {
    id: 3,
    title: 'Название статьи 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/banner.png',
  },
  {
    id: 4,
    title: 'Название статьи 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/banner.png',
  },
  {
    id: 5,
    title: 'Название статьи 5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/banner.png',
  },
  {
    id: 6,
    title: 'Название статьи 6',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/banner.png',
  },
  {
    id: 7,
    title: 'Название статьи 7',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/banner.png',
  },
  {
    id: 8,
    title: 'Название статьи 8',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: '/banner.png',
  },
];

export default function Age({ params }: { params: { id: string } }) {
  const { id } = params;
  const paths = [
    { href: '/history', label: 'История развития' },
    { href: `/history/${id}`, label: `1960-е годы` },
  ];

  return (
    <div>
      <Breadcrumbs paths={paths} />
      <DescBlock title={content.title} />
      <div className='mt-16 grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4'>
        {sections.map((section) => (
          <Card key={section.title} item={section} />
        ))}
      </div>
    </div>
  );
}
