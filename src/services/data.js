import axios from "axios";


export const getInfos = async (ip) => {
	try {
		const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_my3WRfxUsvbwoUJbaIlWw73cnRpDP&ipAddress=${ip}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};
