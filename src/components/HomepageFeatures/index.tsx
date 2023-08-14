/*
 * @Author: try try418@163.com
 * @Date: 2023-07-10 14:49:12
 * @Description:
 */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'github',
    link: 'https://github.com/Mr-try',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>github</>,
  },
  {
    title: '语雀',
    link: 'https://www.yuque.com/mrtry/blog',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>语雀</>,
  },
  {
    title: 'weekly',
    link: 'https://github.com/Mr-try/weekly',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>weekly</>,
  },
];

function Feature({ title, Svg, link }: FeatureItem) {
  return (
    <a href={link} target="_blank" className={clsx('col col--4')}>
      <div>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
        </div>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
