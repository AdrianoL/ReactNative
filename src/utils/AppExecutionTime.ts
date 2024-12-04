export function executionTime(startTime: Date, endTime: Date): number {
	return endTime.getTime() - startTime.getTime();
}

export function handleErrors(error: any): never {
	console.error('Error:', error);

	if (error.response) {
		const status = error.response.status;
		switch (status) {
			case 0:
				throw new Error('Unable to Connect. Verify Network.');
			case 400:
				throw new Error('Bad Request [400]');
			case 404:
				throw new Error('Not Found [404]');
			case 500:
				throw new Error('Internal Server Error [500]');
			case 502:
				throw new Error('Bad Gateway [502]');
			default:
				throw new Error(`Error [${status}]`);
		}
	} else if (error.request) {
		throw new Error('No response received from server.');
	} else {
		throw new Error('Error in request setup.');
	}
}

export default {
	executionTime,
	handleErrors,
};
