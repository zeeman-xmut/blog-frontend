import { BaseLayout } from '@/layouts';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <></>;
};

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Home;
