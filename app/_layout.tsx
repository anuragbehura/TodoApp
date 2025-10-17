import CustomHeader from '@/components/home/CustomHeader';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Stack 
    screenOptions={{
      header: ({ options }) => <CustomHeader title={options.title} />
    }}
    >
      <Stack.Screen name="index" options={{ title: "All Tasks" }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}