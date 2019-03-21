module.exports = {
  tabItem: {
    flex: 1,
    cursor: 'pointer',
    display: 'flex',
    minWidth: 100,
    background: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  tabItemDestop: {
    height: 70,
    border: '1px rgb(235, 235, 235) solid',
    flexDirection: 'column',
    '&:hover': {
      color: 'red',
      boxShadow: 'inset 0px -2px 0px red'
    }
  },
  tabItemMobile: {
    borderBottom: '1px rgb(235, 235, 235) solid',
    border: 'unset',
    flexDirection: 'row',
    padding: '0 5px',
    fontSize: 14,
    height: 44,
    '&:after': {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      content: '""',
      position: 'absolute',
      background: '#ffffff80'
    },
    '&:hover': {
      color: 'black',
      boxShadow: 'inset 0px -2px 0px black',
      fontWeight: 'bold',
      '&:after': {
        content: '""',
        background: 'unset'
      }
    }
  },
  selected: {
    color: 'red',
    boxShadow: 'inset 0px -2px 0px red'
  },
  icon: {
    width: 24,
    height: 24,
    margin: 4
  },
  name: {
    textAlign: 'center'
  }
};
