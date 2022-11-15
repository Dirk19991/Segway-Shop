import FeaturedScooter from './featuredScooter/FeaturedScooter';
import PackingList from './packingList/PackingList';
import Features from './scooterFeatures/Features';
import Accessories from './accessories/Accessories';
import BigImage from './bigImage/BigImage';
import ImpressiveFeatures from './impressiveFeatues/ImpressiveFeatures';
import SmartPhoneControl from './smartphoneControl/SmartPhoneControl';
import OtherModels from './popularModels/OtherModels';
import Categories from './categories/Categories';
import FreeShipping from './categories/FreeShipping';
function Main() {
  return (
    <>
      <Categories />
      <FreeShipping />
      <FeaturedScooter />
      <Features />
      <PackingList />
      <Accessories />
      <BigImage />
      <ImpressiveFeatures />
      <SmartPhoneControl />
      <OtherModels />
    </>
  );
}
export default Main;
