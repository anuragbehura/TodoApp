import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../../css/auth/signup';
import AuthInput from '@/components/auth/AuthInput';
import RadioButton from '@/components/auth/CheckBox';

export default function SignupScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>TODO App</Text>
                <Text style={styles.subtitle}>Welcome! 😊</Text>
            </View>

            <View style={styles.heading}>
                <Text style={styles.title}>Sign up</Text>
                <Text style={styles.desc}>Create an account to manage your tasks.</Text>
            </View>

            <AuthInput icon='user' placeholder='Full Name' />
            <AuthInput icon='mail' placeholder='Email' />
            <AuthInput icon='lock' placeholder='Password' secureTextEntry />
            <AuthInput icon='lock' placeholder='Confirm Password' secureTextEntry />

            <RadioButton isSelected={false} onPress={() => {}} />

            <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>
                Already have an account?{' '}
                <Text style={styles.link} onPress={() => router.push('/auth/login')}>
                    Log in
                </Text>
            </Text>
        </ScrollView>
    );
}