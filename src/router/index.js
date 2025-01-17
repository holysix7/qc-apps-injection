import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
	SplashScreen,
	Login,
	Qc,
	BoardingScreen,
	ShowProducts,
	ListForm,
	ShowPlanning,
	ListMasspro,
	MassproBeginMaintMold,
	MassproBeginMaterialPreparation,
	MassproBeginMoldSetter,
	MassproBeginTechInjection,
	MassproBeginProdLeader,
	MassproBeginQCLeader,
	MassproBeginForeman,
	PerJam,
	Per4Jam,
	PerShift,
	RevisiFirstPieceLeaderQc,
	RevisiFirstPieceForeman,
	LastShootLeaderQc,
	LastShootForeman,
	Profile,
	Scanner,
	UpdateProductionLeader,
	UpdateForemanLeader,
	ContinueMP,
	StopMP,
	OQC,
	NextDay,
	ShowNGProducts,
	Rework,
	ReworkProdLeader,
	ReworkQCLeader,
	ReworkOperator,
	IQC,
	ListPartNumber,
	FormIQC
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={({ route, navigation }) => ({
			gestureEnabled: true,
			headerStatusBarHeight:
			navigation.dangerouslyGetState().routes.indexOf(route) > 0 ? 0 : undefined,
		})}>
			<Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="BoardingScreen" component={BoardingScreen} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
			<Stack.Screen name="Qc" component={Qc} options={{headerShown: false}}/>
			<Stack.Screen name="Profile" component={Profile} options={{cardOverlayEnabled: false, headerShown: false}} />
			<Stack.Screen name="ShowProducts" component={ShowProducts} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ListForm" component={ListForm} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ShowPlanning" component={ShowPlanning} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ListMasspro" component={ListMasspro} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="MassproBeginMaintMold" component={MassproBeginMaintMold} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="MassproBeginMaterialPreparation" component={MassproBeginMaterialPreparation} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="MassproBeginMoldSetter" component={MassproBeginMoldSetter} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="MassproBeginTechInjection" component={MassproBeginTechInjection} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="MassproBeginProdLeader" component={MassproBeginProdLeader} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="MassproBeginQCLeader" component={MassproBeginQCLeader} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="MassproBeginForeman" component={MassproBeginForeman} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="PerJam" component={PerJam} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="Per4Jam" component={Per4Jam} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="PerShift" component={PerShift} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="RevisiFirstPieceLeaderQc" component={RevisiFirstPieceLeaderQc} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="RevisiFirstPieceForeman" component={RevisiFirstPieceForeman} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="LastShootLeaderQc" component={LastShootLeaderQc} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="LastShootForeman" component={LastShootForeman} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="Scanner" component={Scanner} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="UpdateProductionLeader" component={UpdateProductionLeader} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="UpdateForemanLeader" component={UpdateForemanLeader} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ContinueMP" component={ContinueMP} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="StopMP" component={StopMP} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="OQC" component={OQC} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="NextDay" component={NextDay} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ShowNGProducts" component={ShowNGProducts} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="Rework" component={Rework} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ReworkProdLeader" component={ReworkProdLeader} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ReworkQCLeader" component={ReworkQCLeader} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ReworkOperator" component={ReworkOperator} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="IQC" component={IQC} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ListPartNumber" component={ListPartNumber} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="FormIQC" component={FormIQC} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
		</Stack.Navigator>
	)
}

export default Router;