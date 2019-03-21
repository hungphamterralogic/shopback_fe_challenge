import { connect } from 'react-redux';
import StoreList from './storeList';

const remakeListWithPriority = (list, selected) => {
  const priorityItem = list.find(item => item.id === selected);
  const listWithoutPriorityItem = list.filter(item => item.id !== selected);
  return priorityItem ? [priorityItem, ...listWithoutPriorityItem] : list;
};

const mapStateToProps = state => {
  const {
    stores: { list, selected: selectedStoreId },
    categories: { selected: selectedCategoryId }
  } = state;
  return {
    stores: remakeListWithPriority(
      list.filter(store => store.categoryId === selectedCategoryId),
      selectedStoreId
    )
  };
};

const StoreListContainer = connect(mapStateToProps)(StoreList);

export default StoreListContainer;
