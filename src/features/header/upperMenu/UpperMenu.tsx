import classes from './UpperMenu.module.css';
import { HashLink } from 'react-router-hash-link';
import { slide as Menu } from 'react-burger-menu';
import { burgerStyles } from './burgerStyles';
import { useMediaQuery } from 'react-responsive';
import { toggleMenu } from './menuSlice';
import { useAppSelector, useAppDispatch } from '../../../app/store';
import IconsPhone from './iconsPhone/IconsPhone';

function UpperMenu() {
  const dispatch = useAppDispatch();

  const menuOpened = useAppSelector((state) => state.menuOpened.menuOpened);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // учитывает высоту прикрепленного header
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const tabNames = ['home', 'features', 'accessories', 'app', 'contacts'];

  const links = tabNames.map((tab) => {
    // features отстутствуют в мобильной версии - рендерим их только на десктоп
    const shouldRender =
      tab !== 'features' || (tab === 'features' && !isMobile);
    return (
      shouldRender && (
        <HashLink
          key={tab}
          onClick={() => dispatch(toggleMenu(false))}
          className={classes.routerLink}
          smooth
          to={`/#${tab}`}
          scroll={(el) => scrollWithOffset(el)}
        >
          {tab.toUpperCase()}
        </HashLink>
      )
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.upperMenu}>
        <ul className={classes.links}>
          {isMobile ? (
            <Menu
              onStateChange={(state) => dispatch(toggleMenu(state.isOpen))}
              isOpen={menuOpened}
              className={classes.menu}
              width={'200px'}
              styles={burgerStyles}
            >
              {links}
            </Menu>
          ) : (
            links
          )}
        </ul>
        <IconsPhone />
      </div>
    </div>
  );
}
export default UpperMenu;
