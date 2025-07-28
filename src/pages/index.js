import Head from 'next/head';
import useDynamicTitle from '@/hooks/useDynamicTitle';

import Header from '@/components/Header';
import Frame from '@/components/Frame';
import Photo from '@/components/Photo';
import Marshrut from '@/components/Marshrut';
import Bingo from '@/components/Bingo';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  useDynamicTitle('Cloud Castle', {
    photo: 'Cloud Castle | Что ждёт',
    marshrut: 'Cloud Castle | Маршрут',
    bingo: 'Cloud Castle | Бинго',
    faq: 'Cloud Castle | FAQs',
  });

  return (
    <>
      <Head>
        <title>Cloud Castle</title>
        <meta name="description" content="Тестовое задание для Cloud Castle. Выполнил Артём Курочкин!" />
        <meta property="og:title" content="Cloud Castle" />
        <meta property="og:description" content="Тестовое задание для Cloud Castle. Выполнил Артём Курочкин!" />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Header />
      <Frame />
      <Photo />
      <Marshrut />
      <Bingo />
      <Faq />
      <Footer />
    </>
  );
}
