import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { DescBlock } from '@/components/desc-block';
import { Card } from '@/components/card';

const content = {
  title: 'Традиции',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

const sections = [
  {
    title: 'Нулевой семестр',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: '1 сентября',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Военно-патриотическая игра',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'День самоуправления',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Джентльмен шоу',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Кружки',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Лагерь студенческого актива "Лидер"',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Мисс ЧТОТиБ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Посвящение',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Русская удаль',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Студенческий слет',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Спортивные мероприятия',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Старт-марш',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Русская кухня',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
];

export default function Traditions() {
  const paths = [{ href: 'traditions', label: 'Традиции' }];

  return (
    <div>
      <Breadcrumbs paths={paths} />
      <DescBlock title={content.title} desc={content.desc} />
      <div className='mt-16 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 md:mt-24 md:grid-cols-[repeat(auto-fit,minmax(290px,1fr))]'>
        {sections.map((section) => (
          <Card key={section.title} sm item={section} />
        ))}
      </div>
    </div>
  );
}
