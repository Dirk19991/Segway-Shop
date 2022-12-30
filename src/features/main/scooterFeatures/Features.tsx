import classes from './Features.module.css';
import FeatureText from './featureText/FeatureText';
import { ChosenFeature } from './featuresSlice';
import FeatureButton from './featureButton/FeatureButton';

function Features() {
  const featureNames: ChosenFeature[] = [
    'delivery',
    'warranty',
    'support',
    'charge',
  ];
  const featureDescriptions = [
    'Delivery within 1 business day',
    'Basic 1 year warranty',
    'After Sales Support',
    'Up to 40 miles per charge',
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.features}>
        <div id='features' className={classes.featuresList}>
          {featureNames.map((featureName, index) => (
            <FeatureButton
              key={featureName}
              name={featureName}
              text={featureDescriptions[index]}
            />
          ))}
        </div>
        <FeatureText />
      </div>
    </div>
  );
}
export default Features;
