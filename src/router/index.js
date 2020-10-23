import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	SplashScreen,
	Login,
	Qc,
	BoardingScreen,
	ShowProducts,
	ListForm,
	MassproBeginMaintMold,
	MassproBeginMaterialPreparation,
	MassproBeginMoldSetter,
	MassproBeginTechInjection,
	MassproBeginProdLeader,
	MassproBeginQCLeader,
	MassproBeginForeman,
	FirstPieceForeman,
	PerJam,
	Per4Jam,
	PerShift,
	RevisiFirstPieceLeaderQc,
	RevisiFirstPieceForeman,
	LastShootLeaderQc,
	LastShootForeman

} from '../pages';
import { TransitionPresets } from '@react-navigation/stack';

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
			...TransitionPresets.ModalPresentationIOS,
		})}
		mode="modal">
			<Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
			<Stack.Screen name="BoardingScreen" component={BoardingScreen} options={{headerShown: false}} />
			<Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
			<Stack.Screen name = "Qc"
				component = {
					Qc
				}
				options = {
					{
						headerShown: false,
						headerTitle: 'my Qc',
						headerStyle: {
							backgroundColor: '#54c3f0'
						},
						headerTitleStyle: {
							color: 'white'
						}
					}
				}
				/>
			<Stack.Screen name="ShowProducts" component={ShowProducts} options={{headerShown: false}} />
			<Stack.Screen name="ListForm" component={ListForm} options={{headerShown: false}} />
			<Stack.Screen name="MassproBeginMaintMold" component={MassproBeginMaintMold} options={{headerShown: false}} />
			<Stack.Screen name="MassproBeginMaterialPreparation" component={MassproBeginMaterialPreparation} options={{headerShown: false}} />
			<Stack.Screen name="MassproBeginMoldSetter" component={MassproBeginMoldSetter} options={{headerShown: false}} />
			<Stack.Screen name="MassproBeginTechInjection" component={MassproBeginTechInjection} options={{headerShown: false}} />
			<Stack.Screen name="MassproBeginProdLeader" component={MassproBeginProdLeader} options={{headerShown: false}} />
			<Stack.Screen name="MassproBeginQCLeader" component={MassproBeginQCLeader} options={{headerShown: false}} />
			<Stack.Screen name="MassproBeginForeman" component={MassproBeginForeman} options={{headerShown: false}} />
			<Stack.Screen name="FirstPieceForeman" component={FirstPieceForeman} options={{headerShown: false}} />
			<Stack.Screen name="PerJam" component={PerJam} options={{headerShown: false}} />
			<Stack.Screen name="Per4Jam" component={Per4Jam} options={{headerShown: false}} />
			<Stack.Screen name="PerShift" component={PerShift} options={{headerShown: false}} />
			<Stack.Screen name="RevisiFirstPieceLeaderQc" component={RevisiFirstPieceLeaderQc} options={{headerShown: false}} />
			<Stack.Screen name="RevisiFirstPieceForeman" component={RevisiFirstPieceForeman} options={{headerShown: false}} />
			<Stack.Screen name="LastShootLeaderQc" component={LastShootLeaderQc} options={{headerShown: false}} />
			<Stack.Screen name="LastShootForeman" component={LastShootForeman} options={{headerShown: false}} />
		</Stack.Navigator>
	)
}

export default Router;