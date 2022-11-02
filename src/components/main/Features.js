import classes from './Features.module.css';
import basicWarranty from '../../assets/images/features/basicWarranty.svg';
import charge from '../../assets/images/features/charge.svg';
import delivery from '../../assets/images/features/delivery.svg';
import support from '../../assets/images/features/support.svg';
import { useSelector, useDispatch } from 'react-redux';
import { changeHighlight } from '../../store/featuresSlice';
import FeatureText from './FeatureText';

function Features() {
  const highlightedFeature = useSelector((state) => {
    for (let feature in state.features) {
      if (state.features[feature] === true) {
        return feature;
      }
    }
  });

  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={classes.features}>
        <div className={classes.featuresList}>
          <div
            onClick={() => dispatch(changeHighlight('delivery'))}
            className={
              highlightedFeature === 'delivery'
                ? classes.highlighted
                : classes.feature
            }>
            <div>
              <img
                className={
                  highlightedFeature === 'delivery'
                    ? classes.highlightedIcon
                    : ''
                }
                src={delivery}
                alt='delivery'
              />
            </div>
            <div>Delivery within 1 business day</div>
          </div>
          <div
            onClick={() => dispatch(changeHighlight('warranty'))}
            className={
              highlightedFeature === 'warranty'
                ? classes.highlighted
                : classes.feature
            }>
            <div>
              <img
                className={
                  highlightedFeature === 'warranty'
                    ? classes.highlightedIcon
                    : ''
                }
                src={basicWarranty}
                alt='basicWarranty'
              />
            </div>
            <div>Basic 1 year warranty</div>
          </div>
          <div
            onClick={() => dispatch(changeHighlight('support'))}
            className={
              highlightedFeature === 'support'
                ? classes.highlighted
                : classes.feature
            }>
            <div>
              <img
                className={
                  highlightedFeature === 'support'
                    ? classes.highlightedIcon
                    : ''
                }
                src={support}
                alt='support'
              />
            </div>
            <div>After Sales Support</div>
          </div>
          <div
            onClick={() => dispatch(changeHighlight('charge'))}
            className={
              highlightedFeature === 'charge'
                ? classes.highlighted
                : classes.feature
            }>
            <div>
              <img
                className={
                  highlightedFeature === 'charge' ? classes.highlightedIcon : ''
                }
                src={charge}
                alt='charge'
              />
            </div>
            <div>Up to 40 miles per charge</div>
          </div>
        </div>
        <FeatureText />
      </div>
    </div>
  );
}
export default Features;
