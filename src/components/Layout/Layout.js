import Head from 'next/head';
import Header from '../Header';
import styles from '../../styles/Layout.module.css'

const Layout = ({ children, className, title, ...rest }) => {
  return (
    <div className="bg-white text-black">
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
      <Header />
      <main className={`${styles.main} container mt-4 md:mt-8`}>{children}</main>
    </div>
  );
};

export default Layout;
