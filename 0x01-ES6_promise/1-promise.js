export default function getFullResponseFromAPI (success){
	var promise = new Promise((resolve, reject) => {
		if (success){
			resolve({status: 200, body: 'Success'});
		}
		else {
			reject(new Error('he fake API is not working currently'));
		}
	});

	return promise;
	}
