import { Category } from './../features/main/featuredScooter/FeaturedScooter';
import { FeaturedModel } from '../features/main/featuredScooter/featuredModelSlice';
import featuredModel from '../data/featuredModel.json';
import categories from '../data/categories.json';

export function chooseModel(state: FeaturedModel) {
  if (state.id) {
    return featuredModel.find((elem: FeaturedModel) => elem.id === state.id);
  } else {
    return categories.find((elem: Category) => elem.id === 6);
  }
}
