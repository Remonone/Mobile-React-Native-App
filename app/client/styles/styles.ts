import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    main: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fade: {
        zIndex: -1,
        display: 'none'
    },
    preview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    },
    heading1: {
        fontWeight: '700',
        fontSize: 36
    },
    subtitle1: {
        fontSize: 20,
        fontWeight: '400'
    }
})