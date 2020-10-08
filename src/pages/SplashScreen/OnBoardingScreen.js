import Onboarding from 'react-native-onboarding-swiper';
import React, {Image} from 'react';
import LogoSIP from '../../assets/logo-sip3.png';

const BordingScreen = props => {
	return (
		<Onboarding
			pages={[
				{
					backgroundColor: '#blue',
					image: <Image source={LogoSIP}/>,
					title: 'Page 1',
					subtitle: 'Page 1 Coeg!'
				},
				{
					backgroundColor: '#blue',
					image: <Image source={LogoSIP}/>,
					title: 'Page 2',
					subtitle: 'Page 2 Sat!'					
				}
			]}
		/>
	)
}

export default BordingScreen;