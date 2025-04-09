import { Banner } from '@/components/banner';
import { Card } from '@/components/card';

const banners = [
  { img: '/banner.png' },
  { img: '/logo.png' },
  { img: '/banner.png' },
  { img: '/logo.png' },
];

const sections = [
  {
    title: 'История развития',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Традиции',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Преподаватели',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
  {
    title: 'Выпускники',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    img: '/banner.png',
  },
];

export default function Home() {
  return (
    <>
      <Banner banners={banners} />
      <div className='container-sm mb-16 mt-8 md:mb-24 md:mt-12'>
        <p className='max-w-[912px] text-blue-dark md:text-xl'>
          Стены нашего техникума хранят обширную историю людей, которые в нем
          учились и работали. Историю студентов и учителей, также, здесь учились
          многие известные люди. ЧТОТиБ вывел в жизнь много профессионалов за
          долгое время, дал им знания и научил жить. И по сей день он несет
          добро и свет в души учащихся…
        </p>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4'>
        {sections.map((section) => (
          <Card key={section.title} item={section} />
        ))}
      </div>
    </>
  );
}
