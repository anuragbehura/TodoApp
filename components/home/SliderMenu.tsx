import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { styles } from '@/css/home/sliderMenu';

const { width, height } = Dimensions.get('window');
const MENU_WIDTH = width * 0.75; // 75% of screen width

type Props = {
    isVisible: boolean;
    onClose: () => void;
};

export default function SlideMenu({ isVisible, onClose }: Props) {
    const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isVisible) {
            // Open menu
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            // Close menu
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: -MENU_WIDTH,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [isVisible]);

    // Remove invalid check for opacityAnim._value and always render Modal when isVisible is true

    return (
        <Modal
            transparent
            visible={isVisible}
            animationType="fade"
            onRequestClose={onClose}
        >
            {/* Blur Overlay */}
            <TouchableWithoutFeedback onPress={onClose}>
                <Animated.View
                    style={[
                        styles.overlay,
                        {
                            opacity: opacityAnim,
                        },
                    ]}
                >
                    <BlurView intensity={20} style={StyleSheet.absoluteFill} />
                </Animated.View>
            </TouchableWithoutFeedback>

            {/* Slide Menu */}
            <Animated.View
                style={[
                    styles.menuContainer,
                    {
                        transform: [{ translateX: slideAnim }],
                    },
                ]}
            >
                <View style={styles.menuContent}>
                    {/* Menu Header */}
                    <View style={styles.menuHeader}>
                        {/* <Text style={styles.menuTitle}>Menu</Text> */}
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Menu Items */}
                    <ScrollView style={styles.menuItems}>
                        {/* <MenuItem icon="👤" text="Profile" onPress={onClose} /> */}
                        <MenuItem icon="⚙️" text="Settings" onPress={onClose} /> 
                        <MenuItem icon="📊" text="Analytics" onPress={onClose} />
                        <MenuItem icon="💬" text="Messages" onPress={onClose} />
                        {/* <MenuItem icon="🔔" text="Notifications" onPress={onClose} /> */}
                        {/* <MenuItem icon="❓" text="Help & Support" onPress={onClose} /> */}
                    </ScrollView>

                    {/* Menu Footer */}
                    <View style={styles.menuFooter}>
                        <MenuItem icon="⚙️" text="Settings" onPress={onClose} />
                    </View>
                </View>
            </Animated.View>
        </Modal>
    );
}

type MenuItemProps = {
    icon: string;
    text: string;
    onPress: () => void;
};

function MenuItem({ icon, text, onPress }: MenuItemProps) {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={onPress}>
            <Text style={styles.menuIcon}>{icon}</Text>
            <Text style={styles.menuText}>{text}</Text>
        </TouchableOpacity>
    );
}