import { notification } from 'antd';

export default function showNotification (type, name){
	switch(type) {
		case 'success':
			notification[type]({
				message: 'Login Success!',
				description: `Welcome back, ${name}!`,
			});
			break;
		case 'error':
			notification[type]({
				message: 'User Account Not Found',
				description: 'Sorry! no Neat Maps user account found',
			});
			break;
		default:
			notification[type]({
				message: 'Unknown Error',
				description: 'Please refresh the page and try again',
			});
			break;
	}
};