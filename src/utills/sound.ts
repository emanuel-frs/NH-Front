import { Audio } from 'expo-av';

export const playClickSound = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require('../assets/sounds/button-click.mp3')
  );
  sound.playAsync();
};
