const addressLat = 40;
const addressLong = 30;
const positionLat = 15;
const positionLong = 20;
const roadLength = Math.sqrt( (addressLat - positionLat)**2 + (addressLong - positionLong)**2 );
console.log(roadLength);