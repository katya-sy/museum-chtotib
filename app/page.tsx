import { Banner } from '@/components/banner';

const banners = [
  { img: '/banner.png', title: 'Добро пожаловать в музей ЧТОТиБ!' },
  { img: '/logo.png', title: 'Добро пожаловать в музей ЧТОТиБ!' },
  { img: '/banner.png', title: 'Добро пожаловать в музей ЧТОТиБ!' },
  { img: '/logo.png', title: 'Добро пожаловать в музей ЧТОТиБ!' },
];

export default function Home() {
  return (
    <>
      <Banner banners={banners} />
    </>
  );
}
