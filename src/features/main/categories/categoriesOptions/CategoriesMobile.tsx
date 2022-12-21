import categories from '../../../../data/categories.json';
import classes from '../Categories.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Category } from '../../featuredScooter/FeaturedScooter';
import { useAppDispatch } from '../../../../app/store';
import { chooseItem, toggleModal } from '../../../modal/modalSlice';

function CategoriesMobile() {
  const dispatch = useAppDispatch();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <Slider className={classes.slider} {...settings}>
      {categories.map((elem: Category) => (
        <div className={classes.item}>
          <div
            className={classes.sliderFlex}
            onClick={() => {
              dispatch(toggleModal(true));
              dispatch(chooseItem(elem));
            }}
          >
            <img
              alt={elem.image}
              src={require(`../../../../assets/images/scooters/${elem.image}.png`)}
            ></img>
            <div className={classes.itemName}>{elem.name}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CategoriesMobile;
