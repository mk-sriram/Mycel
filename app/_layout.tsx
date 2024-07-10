import { Stack } from "expo-router";
import ContactsScreen from "./ContactsScreen";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="ContactsScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
