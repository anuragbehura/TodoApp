import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        height: Platform.OS === 'ios' ? 80 : 80, // Adjust as needed
        backgroundColor: '#F9FAFB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: Platform.OS === 'android' ? 0 : 40, // Adjust for iOS status bar
    },
    leftContent: {
        width: 35,
        height: 35, 
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#000',
        fontSize: 26,
        fontWeight: '800',
    },
    rightContent: {
        width: 35,
        height: 35, // Adjust as needed
        backgroundColor: '#eeeeeeff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
});