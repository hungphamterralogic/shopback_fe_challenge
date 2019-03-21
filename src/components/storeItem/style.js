module.exports = {
  storeItem: {
    flex: 1,
    height: 70,
    padding: '5px 10px',
    cursor: 'pointer',
    display: 'flex',
    minWidth: 180,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
      '&:after': {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        content: '""',
        position: 'absolute',
        background: '#e6e6e624'
      }
    }
  },
  storeItemMobile: {
    border: '#ebebeb 1px solid',
    minWidth: 99,
    color: 'red',
    fontWeight: 'bold'
  },
  icon: {
    height: 30,
    margin: 5
  },
  name: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    width: '100%',
    fontSize: 14
  }
};
