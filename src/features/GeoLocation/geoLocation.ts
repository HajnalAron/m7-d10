export const getGeoLocation = async () => {
  const result: any = await new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
  const cordData = {
    data: {
      latitude: result.coords.latitude,
      longitude: result.coords.longitude
    }
  };
  return cordData;
};
