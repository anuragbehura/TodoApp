import React from 'react';
import { ScrollView, Text, Button, View, TouchableOpacity } from 'react-native';
import { styles } from '../../css/auth/login';
import AuthInput from '@/components/auth/AuthInput';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>TODO App</Text>
                <Text style={styles.subtitle}>Welcome back! 🥳</Text>
            </View>

            <View style={styles.heading}>
                <Text style={styles.title}>Log in</Text>
                <Text style={styles.desc}> Login to access your tasks.</Text>
            </View>

            <AuthInput icon='mail' placeholder='Email' />
            <AuthInput icon='lock' placeholder='Password' secureTextEntry />

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>
                Don't have an account?{' '}
                <Text style={styles.link} onPress={() => router.push('/auth/signup')}>
                    Create one
                </Text>
            </Text>
        </ScrollView>
    );
}

