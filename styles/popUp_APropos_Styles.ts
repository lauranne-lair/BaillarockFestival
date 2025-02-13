import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    banner: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 10,
    },
    scrollView: {
        maxHeight: Dimensions.get('window').height * 0.6,
        width: '100%',
    },
    content: {
        padding: 20,
        backgroundColor: 'rgb(40, 40, 40)',
    },
    section: {
        marginBottom: 15,
    },
    sectionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
        padding: 5,
    },
    sectionText: {
        fontSize: 16,
        color: 'lightgray',
        textAlign: 'justify',
    },
    sectionLink: {
        fontSize: 16,
        color: Colors.secondary,
        textDecorationLine: 'underline',
        marginTop: 5,
    },
    closeBar: {
        backgroundColor: Colors.darkGray,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    closeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
    },
});
