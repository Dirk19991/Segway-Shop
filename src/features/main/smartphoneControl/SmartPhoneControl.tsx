import classes from './SmartPhoneControl.module.css';
import phone from '../../../assets/images/phone.png';
import antiTheft from '../../../assets/images/smartphone/antiTheft.svg';
import dashboard from '../../../assets/images/smartphone/dashboard.svg';
import firmware from '../../../assets/images/smartphone/firmware.svg';
import status from '../../../assets/images/smartphone/status.svg';
import settings from '../../../assets/images/smartphone/settings.svg';
import training from '../../../assets/images/smartphone/training.svg';

function SmartPhoneControl() {
  const icons = [
    { icon: antiTheft, description: 'Anti-theft protection' },
    { icon: dashboard, description: 'Dashboard' },
    { icon: firmware, description: 'Firmware upgrade' },
    { icon: status, description: 'Device status' },
    { icon: settings, description: 'Settings and restrictions' },
    { icon: training, description: 'Training program' },
  ];

  //описание разделено на два блока, чтобы последняя фраза всегда была по центру внизу
  const mainDescription =
    "You can easily control your Segway electric scooter with your smartphone via Bluetooth. Not being the key to the kickscooter, it will give a signal in case of an attempt to steal. Check the current speed, data on the status of the device's systems or set the speed limit with a few touches.";

  const subDescription =
    'And the skating training program is indispensable for beginners.';

  return (
    <div className={classes.wrapper}>
      <div id='app' className={classes.smartPhoneControl}>
        <div className={classes.header}>Control from your smartphone</div>
        <div className={classes.description}>{mainDescription}</div>
        <div className={classes.description}>{subDescription}</div>
        <div className={classes.main}>
          <div className={classes.iconsDownload}>
            <div className={classes.icons}>
              {icons.map((elem) => (
                <div key={elem.icon} className={classes.iconContainer}>
                  <div className={classes.icon}>
                    <img
                      className={classes.contentIcon}
                      src={elem.icon}
                      alt={elem.icon}
                    />
                  </div>
                  <div className={classes.iconDescription}>
                    {elem.description}
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.download}></div>
          </div>
          <div className={classes.image}>
            <img src={phone} alt='phone' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SmartPhoneControl;
