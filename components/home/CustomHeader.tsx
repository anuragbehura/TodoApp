import { useNavigation } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "@/css/home/customHeader"
import Icon from 'react-native-vector-icons/Feather'
import SlideMenu from "./SliderMenu"
import { useState } from "react"

type Props = {
    title: string | undefined,
}

export default function CustomHeader({ title }: Props) {
    const navigation = useNavigation()
    const canGoBack = navigation.canGoBack()
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => setIsMenuVisible(true)} style={styles.leftContent}>
                    <Icon name="menu" size={30} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>{title || ''}</Text>

                <TouchableOpacity style={styles.rightContent}>
                    <Icon name="search" size={25} />
                </TouchableOpacity>
            </View>

            {/* Slider Menu */}
            <SlideMenu 
                isVisible={isMenuVisible}
                onClose={() => setIsMenuVisible(false)}
            />
        </>
    );
}