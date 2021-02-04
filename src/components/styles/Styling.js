import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    putihBold: {
        fontSize: 12, 
        fontWeight: 'bold'
    },
    hitamBold: {
        color: 'black', 
        fontSize: 12, 
        fontWeight: 'bold'
    },
    machineLoaded: {
        backgroundColor: '#1a508b', 
        marginTop: 5, 
        marginVertical: 2, 
        marginHorizontal: 3, 
        height: 45, 
        width: "23%",
        borderRadius: 5, 
        flexDirection: 'column'
    },
    machineNoLoad: {
        backgroundColor: 'yellow', 
        marginTop: 5, 
        marginVertical: 2, 
        marginHorizontal: 3, 
        height: 45, 
        width: "23%", 
        borderRadius: 5, 
        flexDirection: 'column'
    },
    machineBroken: {
        backgroundColor: 'red', 
        marginTop: 5,
        marginVertical: 2, 
        marginHorizontal: 3, 
        height: 45, 
        width: "23%", 
        borderRadius: 5, 
        flexDirection: 'column'
    },
    machineMaintenance: {
        backgroundColor: '#ebae34', 
        marginTop: 5,
        marginVertical: 2,
        marginHorizontal: 3,
        height: 45, 
        width: "23%", 
        borderRadius: 5, 
        flexDirection: 'column'
    },
    machineElse: {
        backgroundColor: 'green',
        marginTop: 5, 
        marginVertical: 2, 
        marginHorizontal: 3,
        height: 45, 
        width: "23%", 
        borderRadius: 5, 
        flexDirection: 'column'
    },
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
        backgroundColor: '#dfe0df', 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    headerWithBorder: {
        height: 140,
        borderWidth: 0.3,
        backgroundColor: '#dfe0df', 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    contentHeader: { 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#dfe0df'
    },
    contenDateProduct: { 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        backgroundColor: '#dfe0df'
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
        backgroundColor: '#dfe0df'
    },
    contentFullWithPadding: {
        flex: 1, 
        backgroundColor: '#dfe0df',
        padding: 20
    },
    responsiveButtonLoop: {
        flexWrap: 'wrap', 
        flexDirection: 'row',
        paddingVertical: 9
    },
    bottomNavbar: {
        height: 60, 
        backgroundColor: '#dfe0df', 
        flexDirection: 'row', 
        borderWidth: 0.3
    },
    buttonNavbar: {
        height: 63, 
        backgroundColor: '#dfe0df', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1
    },
    textStyle: {
        color: 'black'
    },
    productsButtonRunning: {
        marginTop: 5, 
        alignItems: 'center',
        justifyContent: 'center', 
        width: "100%", 
        borderRadius: 15,
        backgroundColor: '#1a508b',
        flexDirection: 'column'
    },
    productsButtonStop: {
        backgroundColor: '#663f3f',
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
        backgroundColor: '#1a508b'
        // flexDirection: 'row'
    },
    dailyInspectionButton: {
        marginTop: 5,
        width: "100%", 
        borderRadius: 15,         
        backgroundColor: '#1a508b'
        // flexDirection: 'row'
    },

    dailyInspectionStopButton: {
        marginTop: 170,
        width: "45%", 
        borderRadius: 15, 
        justifyContent: 'center', 
        backgroundColor: '#ec4646'
    },
    
    dailyInspectionStopButtonNotAccess: {
        marginTop: 170,
        width: "45%", 
        borderRadius: 15, 
        justifyContent: 'center', 
        backgroundColor: '#726a95'
    },

    dailyInspectionContinueButton: {
        marginTop: 170,
        marginLeft: 30,
        width: "45%", 
        borderRadius: 15, 
        justifyContent: 'center', 
        backgroundColor: '#00af91'
    },
    dailyInspectionContinueNotAccessButton: {
        marginTop: 170,
        marginLeft: 30,
        width: "45%", 
        borderRadius: 15, 
        justifyContent: 'center', 
        backgroundColor: '#726a95'
    },

    fontDailyInspectionContinueButton: {
        color: 'white', 
        fontWeight: 'bold'
    },

    fontDailyInspectionStopButton: {
        color: 'white', 
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