import classes from './FeatureText.module.css';
import fortyMiles from '../../../../assets/images/features/fortyMiles.svg';
import map from '../../../../assets/images/features/map.svg';
import one from '../../../../assets/images/features/one.svg';
import tools from '../../../../assets/images/features/tools.svg';
import { ChosenFeature } from '../featuresSlice';
import { useAppSelector } from '../../../../app/store';

function FeatureText() {
  const highlightedFeature = useAppSelector((state) => {
    let feature: ChosenFeature;
    for (feature in state.features) {
      if (state.features[feature] === true) {
        return feature;
      }
    }
  });

  const content = {
    delivery: {
      header: 'WE ARE IN LOS ANGELES, CA',
      text: 'Free California 1 day shipping. US Free Shipping 3-5 days.',
      icon: map,
    },
    warranty: {
      header: "ONE YEAR MANUFACTURER'S WARRANTY",
      text: [
        'The basic warranty is 1 year.',
        <br />,
        'You can also extend the warranty up to 4 years.',
      ],
      icon: one,
    },
    support: {
      header: 'AFTER SALES SUPPORT',
      text: 'If you have any difficulties with your kickscooter, our specialists will contact you within 15 minutes.',
      icon: tools,
    },
    charge: {
      header: ['UP TO 40 MILES OF RANGE', <br />, 'ON A SINGLE CHARGE'],
      text: 'With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.',
      icon: fortyMiles,
    },
  };

  function getIconStyles() {
    if (highlightedFeature === 'delivery') {
      return classes.map;
    }
    if (highlightedFeature === 'warranty') {
      return classes.one;
    }
    if (highlightedFeature === 'support') {
      return classes.support;
    }
    if (highlightedFeature === 'charge') {
      return classes.charge;
    }
  }

  const iconStyles = getIconStyles();

  return highlightedFeature ? (
    <div className={classes.wrapper}>
      {/* подгружаем картинки заранее, иначе были проблемы с анимацией. Делаем
      //этот блок невидимым */}
      <div className={classes.preload}>
        <img src={map} alt='icon' />
        <img src={one} alt='icon' />
        <img src={tools} alt='icon' />
        <img src={fortyMiles} alt='icon' />
      </div>
      <div className={classes.featureText}>
        <div className={classes.header}>
          {content[highlightedFeature].header}
        </div>
        <div className={classes.smallText}>
          {content[highlightedFeature].text}
        </div>
      </div>
      <div className={iconStyles}>
        <img src={content[highlightedFeature].icon} alt='icon' />
      </div>
    </div>
  ) : (
    <div>Error</div>
  );
}
export default FeatureText;
