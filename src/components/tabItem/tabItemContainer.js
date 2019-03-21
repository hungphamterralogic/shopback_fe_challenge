import { connect } from 'react-redux';
import TabItem from './tabItem';
import { selectCategory } from '../../actions/categoriesAction';
import { setValueIntoKey } from '../../utils/localStorage';

const mapStateToProps = state => ({
  selectedCategoryId: state.categories.selected
});

const mapDispatchToProps = dispatch => ({
  selectCategory: categoryID => {
    dispatch(selectCategory(categoryID));
    setValueIntoKey('category', categoryID);
  }
});

const TabItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabItem);

export default TabItemContainer;
