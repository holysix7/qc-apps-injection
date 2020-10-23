import React, {useState} from 'react';
import moment from 'moment';

const TimeForShift = (value) => {
	console.warn(value)
	const times = moment()
								.format('H')
	const time = parseInt(times)
	if(time == 8)
	{
		const uye = "Shift 1 - 1"
	}else if(time == 9)
	{
		const uye = "Shift 1 - 2"    
	}else if(time == 10)
	{
		const uye = "Shift 1 - 3"
	}else if(time == 11)
	{
		const uye = "Shift 1 - 4"
	}else if(time == 12)
	{
		const uye = "Shift 1 - 5"
	}else if(time == 13)
	{
		const uye = "Shift 1 - 6"
	}else if(time == 14)
	{
		const uye = "Shift 1 - 7"
	}else if(time == 15)
	{
		const uye = "Shift 1 - 8"
	}
}

export default TimeForShift;