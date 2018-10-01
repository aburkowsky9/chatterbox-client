var Rooms = {
	allRooms: [],

	getRoomOptions: function() {
		var setRooms = new Set(Rooms.allRooms);
		return setRooms;
	}

};