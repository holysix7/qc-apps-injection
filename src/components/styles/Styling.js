import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    logoSipBesar: {
        width: 188, 
        height: 150
    },
    labelFloat: {
        height: 60, 
        width: 300
    },
    buttonLogin: {
        marginTop: 10
    },
    header: {
        height: 100, 
        backgroundColor: '#F5F5DC', 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    headerWithBorder: {
        height: 140,
        borderWidth: 0.3,
        backgroundColor: '#F5F5DC', 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    contentHeader: { 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#F5F5DC'
    },
    contenDateProduct: { 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        backgroundColor: '#F5F5DC'
    },
    contentHeaderChild: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    itemHeader2: {
        borderWidth: 0.5, 
        borderRadius: 10,
        width: 250,
        height: 30,
        justifyContent: 'center', 
        paddingLeft: 30
    },
    contentFull: {
        flex: 1, 
        backgroundColor: '#F5F5DC'
    },
    contentFullWithPadding: {
        flex: 1, 
        backgroundColor: '#F5F5DC',
        padding: 20
    },
    responsiveButtonLoop: {
        flexWrap: 'wrap', 
        flexDirection: 'row',
        paddingVertical: 9
    },
    bottomNavbar: {
        height: 60, 
        backgroundColor: '#F5F5DC', 
        flexDirection: 'row', 
        borderWidth: 0.3
    },
    buttonNavbar: {
        height: 63, 
        backgroundColor: '#F5F5DC', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1
    },
    textStyle: {
        color: 'black'
    },
    productsButton: {
        marginTop: 5, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: "100%", 
        borderRadius: 15, 
        flexDirection: 'column'
    },
    massProButton: {
        marginTop: 5,
        width: "100%", 
        borderRadius: 15, 
        // flexDirection: 'row'
    },
    dailyInspectionButton: {
        marginTop: 5,
        width: "100%", 
        borderRadius: 15, 
        // flexDirection: 'row'
    },

    dailyInspectionStopButton: {
        marginTop: 170
        ,
        width: "100%", 
        borderRadius: 15, 
        backgroundColor: 'red'
    },

    dailyInspectionContinueButton: {
        marginTop: 5,
        width: "100%", 
        borderRadius: 15, 
        backgroundColor: '#75cfb8'
    },

    fontDailyInspectionContinueButton: {
        color: 'black', 
        fontWeight: 'bold'
    },

    fontDailyInspectionStopButton: {
        color: 'black', 
        fontWeight: 'bold'
    },
    productsNotAccessButton: {
        marginTop: 5,
        backgroundColor: '#726a95',
        width: "100%", 
        borderRadius: 15, 
        // flexDirection: 'row'
    },
    fontButtonHeader: {
        fontSize: 20, 
        fontWeight: 'bold'
    },
    fontButtonHeaderChild: {
        fontSize: 15, 
        fontWeight: 'bold'
    },
    fontButtonFooter: {
        fontSize: 9, 
        fontWeight: 'bold'
    },
    notifNoProducts: {
        borderWidth: 1, 
        borderRadius: 10, 
        backgroundColor: '#c90d00'
    },
    fontNotifNoProducts: {
        color: "#c9c9c9", 
        paddingVertical: 10, 
        textAlign: 'center', 
        fontSize: 12
    },
    fontNotifNoProductsChild: {
        fontWeight: 'bold'
    },
    fontProduct: {
        fontSize: 25, 
        fontWeight: 'bold'
    },
    fontDateProduct: {
        fontSize: 25,
        alignItems: 'flex-start',
        fontWeight: 'bold'
    },
    fontListProducts: {
        fontSize: 15, 
        fontWeight: 'bold'
    },
    fontPlanning: {
        fontSize: 15, 
        fontWeight: 'bold'
    },
    fontNoPlanning: {
        fontSize: 15, 
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        width: 250,
        borderWidth: 1,
        padding: 2,
        textAlign: 'center'
    },
    fontNoDailyInspection: {
        fontSize: 10, 
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        width: 250,
        borderWidth: 1,
        padding: 2,
        textAlign: 'center'
    },
    viewNoPlanning: {
        padding: 5
    },
    viewNoDailyInspection: {
        padding: 5
    }
})

export default styles;