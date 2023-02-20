import Layout from '@/components/Layout';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('@/components/Map'), {
  loading: () => 'Loading...',
});


export default function Home() {
  return (
    <Layout title='Parkir Gratis'>
      <DynamicMap />
    </Layout>
  );
}
