import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fonts, radii, spacing, ThemeColors } from '../theme/theme';

const FADE_IN_MS = 180;
const HOLD_MS = 1100;
const FADE_OUT_MS = 220;

export function useSuccessPopup() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const opacity = useRef(new Animated.Value(0)).current;
  const animation = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    return () => {
      animation.current?.stop();
    };
  }, []);

  const show = (text: string) => {
    setMessage(text);
    animation.current?.stop();
    opacity.setValue(0);
    setVisible(true);
    animation.current = Animated.sequence([
      Animated.timing(opacity, { toValue: 1, duration: FADE_IN_MS, useNativeDriver: false }),
      Animated.delay(HOLD_MS),
      Animated.timing(opacity, { toValue: 0, duration: FADE_OUT_MS, useNativeDriver: false }),
    ]);
    animation.current.start(({ finished }) => {
      if (finished) setVisible(false);
    });
  };

  return { visible, message, opacity, show };
}

type Props = {
  visible: boolean;
  message: string;
  opacity: Animated.Value;
  colors: ThemeColors;
};

export function SuccessPopup({ visible, message, opacity, colors }: Props) {
  const styles = useMemo(() => createStyles(colors), [colors]);
  if (!visible) return null;

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.overlay,
        {
          opacity,
          transform: [{ scale: opacity.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] }) }],
        },
      ]}
    >
      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <Ionicons name="checkmark" size={20} color={colors.onAccent} />
        </View>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Animated.View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      backgroundColor: colors.surface,
      borderRadius: radii.lg,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 6,
    },
    iconWrap: {
      width: 28,
      height: 28,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.accent,
    },
    text: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 15,
      color: colors.text,
    },
  });
}
