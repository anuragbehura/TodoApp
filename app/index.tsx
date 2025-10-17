import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import TodoSVG from '@/assets/home.svg'; // ✅ import SVG as component
import AddButton from '@/components/home/AddButton';

export default function Index() {
    const router = useRouter();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F9FAFB',
                paddingHorizontal: 20,
            }}
        >
            {/* SVG Illustration */}
            <TodoSVG width={300} height={300} style={{ marginBottom: 30 }} />

            {/* Title & Button */}
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#111', marginBottom: 20 }}>
                Welcome to the GODO
            </Text>

            <Button title="Go to Login" onPress={() => router.push('/auth/login')} />

            <AddButton />
        </View>
    );
}
