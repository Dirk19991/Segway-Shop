import classes from './Categories.module.css';
import CategoriesDesktop from './categoriesOptions/CategoriesDesktop';
import CategoriesMobile from './categoriesOptions/CategoriesMobile';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useMediaQuery } from 'react-responsive';

function Categories() {
  // логика и отображание для десктопа и мобильной версии сильно
  // отличаются, поэтому помещены в отдельные компоненты

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      {isMobile ? (
        <CategoriesMobile />
      ) : (
        <div className={classes.wrapper}>
          <div className={classes.categories}>
            <CategoriesDesktop />
          </div>
        </div>
      )}
    </>
  );
}
export default Categories;
