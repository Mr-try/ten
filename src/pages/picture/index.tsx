/*
 * @Author: try try418@163.com
 * @Date: 2023-07-10 14:49:12
 * @Description:
 */
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="老照片" noFooter>
      考虑采用满屏瀑布流+操作按钮模式
    </Layout>
  );
}
