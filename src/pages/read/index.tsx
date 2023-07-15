/*
 * @Author: try try418@163.com
 * @Date: 2023-07-10 14:49:12
 * @Description:
 */
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="阅读笔记" noFooter>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
