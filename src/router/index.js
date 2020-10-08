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
	MassproBeginTechInjection
} from '../pages';
import { TransitionPresets } from '@react-navigation/stack';
import GeneralStatusBarColor from '../components/GeneralStatusBarColor';

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
		{/* <Stack.Navigator> */}
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
		</Stack.Navigator>
			
	)
}

export default Router;