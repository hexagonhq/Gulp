let storage = localStorage;

		seve.addEventListener('click', function() {
			storage.data = JSON.stringify({
				myName: myName.value,
				bday: bday.value,
				about: about.value
			});
		});

		load.addEventListener('click', function() {
			let data = JSON.parse(storage.data || '{}');
			myName.value = data.myName || '';
			bday.value = data.bday || '';
			about.value = data.about || '';
		});

		issessionStorage.addEventListener('change', function() {
			storage = issessionStorage.chacked ? sessionStorage : localStorage;
		});