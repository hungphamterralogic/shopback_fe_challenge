import { connect } from 'react-redux';
import CategoriesAndStores from './categoriesAndStores';
import { initStores } from '../../actions/storesAction';
import { initCategories } from '../../actions/categoriesAction';

const mapDispatchToProps = dispatch => ({
  initStores: stores => dispatch(initStores(stores)),
  initCategories: categories => dispatch(initCategories(categories))
});

const CategoriesAndStoresContainer = connect(
  null,
  mapDispatchToProps
)(CategoriesAndStores);

export default CategoriesAndStoresContainer;
