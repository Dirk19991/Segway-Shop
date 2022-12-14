import classes from './ImpressiveFeatures.module.css';
import impressiveFeatures from '../../../data/impressiveFeatures.json';

interface ImpressiveFeaturesObject {
  header: string;
  description: string;
  image: string;
}

function ImpressiveFeatures() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.impressiveFeatures}>
        <div className={classes.mainHeader}>IMPRESSIVE FEATURES</div>
        <div className={classes.featuresBox}>
          {impressiveFeatures.map((elem: ImpressiveFeaturesObject) => (
            <div key={elem.image} className={classes.feature}>
              <div className={classes.image}>
                <img
                  src={require(`../../../assets/images/impressiveFeatures/${elem.image}.svg`)}
                  alt={elem.image}
                ></img>
              </div>
              <div className={classes.header}>{elem.header}</div>
              <div className={classes.description}>{elem.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ImpressiveFeatures;
