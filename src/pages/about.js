import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import React from 'react';

const AboutUs = () => {
  return (
    <Layout title='About Us'>
      <div className='container'>
        <h3 className='font-bold text-2xl mt-8'>About US</h3>
        <p className='mt-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quo.
          Laudantium doloremque inventore officia architecto, obcaecati placeat
          aliquam magni alias mollitia, veritatis provident iure consequatur
          delectus. Consequuntur, fuga nisi labore illum rerum dolor officia
          inventore dolores praesentium ullam perspiciatis laudantium earum quos
          minus totam consequatur sequi! Optio nisi accusamus distinctio!
        </p>
      </div>
    </Layout>
  );
};

export default AboutUs;
