import { connect } from 'react-redux';
import StupidComponentTest from './StupidComponentTest';

const mapStateToProps = state => {
  const {
    stores: { message }
  } = state;
  return { message };
};

const StoreListContainer = connect(mapStateToProps)(StupidComponentTest);

export default StoreListContainer;
