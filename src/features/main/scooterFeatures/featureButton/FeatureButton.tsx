import { useAppDispatch, useAppSelector } from '../../../../app/store';
import { changeHighlight, ChosenFeature } from '../featuresSlice';
import classes from '../Features.module.css';

interface FeatureButtonProps {
  name: ChosenFeature;
  text: string;
}

function FeatureButton({ name, text }: FeatureButtonProps) {
  const highlightedFeature = useAppSelector((state) => {
    let feature: ChosenFeature;
    for (feature in state.features) {
      if (state.features[feature] === true) {
        return feature;
      }
    }
  });

  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(changeHighlight(name))}
      className={
        highlightedFeature === name ? classes.highlighted : classes.feature
      }
    >
      <div>
        <img
          className={
            highlightedFeature === name ? classes.highlightedIcon : classes.icon
          }
          src={require(`../../../../assets/images/features/${name}.svg`)}
          alt={name}
        />
      </div>
      <div className={classes.featureText}>{text}</div>
    </div>
  );
}
export default FeatureButton;
