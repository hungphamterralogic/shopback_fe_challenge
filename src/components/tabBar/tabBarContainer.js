import { connect } from 'react-redux';
import TabBar from './tabBar';

const remakeListWithPriority = (list, selected) => {
  const priorityItem = list.find(item => item.id === selected);
  const listWithoutPriorityItem = list.filter(item => item.id !== selected);
  return priorityItem ? [priorityItem, ...listWithoutPriorityItem] : list;
};

const mapStateToProps = ({ categories: { list, selected } }) => ({
  categories: remakeListWithPriority(list, selected)
});

const TabBarContainer = connect(mapStateToProps)(TabBar);

export default TabBarContainer;
