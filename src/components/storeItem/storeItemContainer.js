import { connect } from 'react-redux';
import StoreItem from './storeItem';
import { selectStore } from '../../actions/storesAction';
import { setValueIntoKey } from '../../utils/localStorage';

const mapDispatchToProps = dispatch => ({
  selectStore: storeID => {
    dispatch(selectStore(storeID));
    setValueIntoKey('store', storeID);
  }
});

const StoreItemContainer = connect(
  null,
  mapDispatchToProps
)(StoreItem);

export default StoreItemContainer;
