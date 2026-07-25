import { Platform, Switch } from 'react-native';
import type { ThemeColors } from '../theme/theme';

interface Props {
  value: boolean;
  onValueChange: (value: boolean) => void;
  colors: ThemeColors;
}

// react-native-web's Switch reads the "on" thumb/track colors from its own
// activeThumbColor/activeTrackColor props and otherwise falls back to a
// hardcoded teal default, ignoring thumbColor once checked=true — unlike
// native RN, where a single thumbColor prop applies regardless of state.
// Those two props aren't part of RN's SwitchProps type, so they're added
// only on web via a loosely-typed spread rather than widening the shared type.
const webOnlyActiveColors = (colors: ThemeColors) =>
  Platform.OS === 'web'
    ? ({ activeThumbColor: colors.accent, activeTrackColor: colors.accentMuted } as Record<string, unknown>)
    : {};

export function ThemedSwitch({ value, onValueChange, colors }: Props) {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: colors.border, true: colors.accentMuted }}
      thumbColor={value ? colors.accent : colors.switchThumbOff}
      {...webOnlyActiveColors(colors)}
    />
  );
}
