import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 12,
    },
    checkbox: {
        height:18,
        width: 18,
        borderRadius: 6,
        margin: 8,
    },
    termsCondition:{
        color: '#000',
        fontWeight: '500',
    }
});