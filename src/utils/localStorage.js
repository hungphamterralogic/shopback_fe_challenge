const setValueIntoKey = (key, value) => localStorage.setItem(key, value);

const getValueFromKey = key => localStorage.getItem(key);

module.exports = {
  setValueIntoKey,
  getValueFromKey
};
