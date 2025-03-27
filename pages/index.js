
import React, { useEffect } from 'react';
import Layout from './layout';
import { useRouter } from 'next/router';

function PageLayout({ children }) {
  const router = useRouter()
  useEffect(() => {
    router.push('/keyerPage')
  }, [])
  return (
    <Layout >
    </Layout>
  );
}

export default PageLayout;
