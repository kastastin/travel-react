import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'fc6b23ec25mshab62c43167a7b13p1750e3jsn00345051afe8',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// 5d07a04db8mshca2effab91e5cd4p1250e3jsn00f126e30a0c my422/500