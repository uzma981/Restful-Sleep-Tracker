import { AsyncStorage } from 'react-native';

global.sleeping = false;
global.start;
global.stop;
global.sleepTarget;
global.wakeUpTarget;

export const saveTarget = async() => {
  try {
    await AsyncStorage.setItem("st", global.sleepTarget);
    await AsyncStorage.setItem("wt", global.wakeUpTarget);
  }
  catch (err) {
    alert(err);
  }
}
