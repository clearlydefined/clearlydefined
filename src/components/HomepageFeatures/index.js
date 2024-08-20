import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use the data',
    image: require('@site/static/img/use_data.png').default,
    link: '/docs/get-involved/using-data',
    description: (
      <>   
      The simplest thing you can do to get involved is to use the data.
      </>
    ),
  },
  {
    title: 'Curate the data',
    image: require('@site/static/img/curate_data.png').default,
    link: '/docs/get-involved/data-curation',
    description: (
      <>
        Vet, discuss and merge contributions to the project.
      </>
    ),
  },
  {
    title: 'Contribute data',
    image: require('@site/static/img/contribute_data.png').default,
    link: '/docs/get-involved/contributing-data',
    description: (
      <>
        Enhacing the data is something that anyone can do.
      </>
    ),
  },
  {
    title: 'Contribute code',
    image: require('@site/static/img/contribute_code.png').default,
    link: '/docs/get-involved/contributing-code',
    description: (
      <>
        It’s about the data but there is a non-trivial service that drives it.
      </>
    ),
  },
  {
    title: 'Add a harvest',
    image: require('@site/static/img/add_harvest.png').default,
    link: '/docs/get-involved/adding-sources',
    description: (
      <>   
      Add to our growing types of packages.
      </>
    ),
  },
  {
    title: 'Adopt practices',
    image: require('@site/static/img/adopt_practices.png').default,
    link: '/docs/get-involved/adopting',
    description: (
      <>
        Help ensure that the information for components is correct.
      </>
    ),
  },
];

function Feature({image, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <img src={image} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
