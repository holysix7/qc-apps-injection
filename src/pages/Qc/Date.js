import React, {useState} from 'react';
import {Text} from 'native-base';


const DATE = ({today, yesterday}) => {
	
	const hariIni = today
	?
		<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{today}</Text>
	:
	null
	const kemarin = yesterday
	?
		<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{yesterday}</Text>
	:
	null

	return (
		<>
		{kemarin}
		{hariIni}
		</>
	)
}
export default DATE;