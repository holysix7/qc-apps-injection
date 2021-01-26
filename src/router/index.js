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
	OQC,
	Scanner,
	UpdateQCLeader,
	UpdateForemanLeader
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={({ route, navigation }) => ({
			gestureEnabled: true,
			cardOverlayEnabled: true,
			headerStatusBarHeight:
			navigation.dangerouslyGetState().routes.indexOf(route) > 0
			? 0
			: undefined,
			
		})}>
			<Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="BoardingScreen" component={BoardingScreen} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
			<Stack.Screen name="Qc" component={Qc} options={{headerShown: false}}/>
			<Stack.Screen name="Profile" component={Profile} options={{cardOverlayEnabled: false, headerShown: false}} />
			<Stack.Screen name="ShowProducts" component={ShowProducts} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ListForm" component={ListForm} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="ShowPlanning" component={ShowPlanning} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
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
			<Stack.Screen name="OQC" component={OQC} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="UpdateQCLeader" component={UpdateQCLeader} options={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}} />
			<Stack.Screen name="UpdateForemanLeader" component={UpdateForemanLeader} options={{headerShown: false}} />
		</Stack.Navigator>
	)
}

export default Router;