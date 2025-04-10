import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { DescBlock } from '@/components/desc-block';
import { Card } from '@/components/card';

const content = {
  title: 'Преподаватели',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

const sections = [
  { id: 1, title: '1950-е годы', img: '/banner.png' },
  { id: 2, title: '1960-е годы', img: '/banner.png' },
  { id: 3, title: '1970-е годы', img: '/banner.png' },
  { id: 4, title: '1980-е годы', img: '/banner.png' },
  { id: 5, title: '1990-е годы', img: '/banner.png' },
  { id: 6, title: '2000-е годы', img: '/banner.png' },
  { id: 7, title: '2010-е годы', img: '/banner.png' },
  { id: 8, title: '2020-е годы', img: '/banner.png' },
];

export default function Teachers() {
  const paths = [{ href: 'teachers', label: 'Преподаватели' }];

  return (
    <div>
      <Breadcrumbs paths={paths} />
      <DescBlock title={content.title} desc={content.desc} />
      <div className='mt-16 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 xs:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:mt-24 md:grid-cols-[repeat(auto-fit,minmax(290px,1fr))]'>
        {sections.map((section) => (
          <Card key={section.title} sm item={section} />
        ))}
      </div>
    </div>
  );
}
