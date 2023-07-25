const KEY_PREFIX = "to-do-app-";

const getDataDB = (keyWithoutPrefix) => {
  const key = KEY_PREFIX + keyWithoutPrefix;
  return JSON.parse(localStorage.getItem(key)) ?? [];
};

const addToLocalDB = (keyWithoutPrefix, newValue = [{}]) => {
  const key = KEY_PREFIX + keyWithoutPrefix;

  const value = [...getDataDB(keyWithoutPrefix), ...newValue];
  localStorage.setItem(key, JSON.stringify(value));
};

export {addToLocalDB, getDataDB};