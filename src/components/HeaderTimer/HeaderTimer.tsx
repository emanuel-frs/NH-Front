import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Alert } from 'react-native';

interface TimerProps {
  duration?: number; // segundos
  onFinish?: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration = 45, onFinish }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(duration);
  const progress = useRef(new Animated.Value(0)).current;
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: duration * 1000,
      useNativeDriver: false,
    }).start();

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000);
      const remaining = Math.max(duration - elapsed, 0);
      setSecondsLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        onFinish?.();
        Alert.alert('Tempo esgotado', 'A contagem chegou ao fim!');
      }
    }, 250);

    return () => clearInterval(interval);
  }, [duration, onFinish, progress]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{secondsLeft}s</Text>
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, { width: widthInterpolated }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  timerText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 16,
    backgroundColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3b82f6',
  },
});

export default Timer;
