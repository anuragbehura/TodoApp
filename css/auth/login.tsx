import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F8FAFC',
        padding: 20,
        paddingTop: 50
    },
    header: {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    logo: {
        fontSize: 25,
        fontWeight: '700',
        color: '#0f172a',
        // marginBottom: 4,
    },
    subtitle: {
        fontSize: 13,
        color: '#64748b',
        // marginBottom: 20,

    },
    heading: {
        marginTop: 80,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 16,
    },
    desc: {
        color: '#64748b',
        marginBottom: 16,
    },
    forgot: {
        alignSelf: 'flex-end',
        color: '#000',
        marginBottom: 16,
    },
    primaryBtn: {
        backgroundColor: '#000',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
    },
    primaryBtnText: {
        color: '#fff',
        fontWeight: '600',
    },
    footer: {
        marginTop: 20,
        textAlign: 'center',
        color: '#64748b',
    },
    link: {
        color: '#000',
        fontWeight: '600',
    }
})