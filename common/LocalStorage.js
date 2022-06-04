import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 24 * 3600 * 1000, //24h 3600s 100ms, hết hạn sau 24h
  enableCache: true,
});

//dùng ở đâu thì gọi saveLocalStorage ở đó rồi dùng
export const saveLocalStorage = (key, data) => {
  storage.save({
    key: key,
    data: data,
    expires: 1 * 3600 * 1000, //hết hạn sau 1h
  });
};

export const getLocalStorage = async key => {
  try {
    let result = await storage.load({
      key: key,
      autoSync: true,
      syncInBackground: true,
    });
    // console.log('get successful');
    return result;
  } catch (err) {
    return 'err' + err;
  }
};

export const removeLocalStorage = key => {
  storage.remove({key: key});
};
