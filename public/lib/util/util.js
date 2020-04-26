const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatToday = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const tomorrow = date.getDate()+1
  return [new Date([year, month, day].map(formatNumber).join('-')),new Date([year, month, tomorrow].map(formatNumber).join('-'))]
}

const formatMonth = date => {
  const day = ("01");
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const nextmonth = ("0" + (date.getMonth() + 2)).slice(-2);
  const start = date.getFullYear()+"-"+(month)+"-"+(day) ;
  const end = date.getFullYear()+"-"+(nextmonth)+"-"+(day) ;
  return [start,end]
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return new Date([year, month, day].map(formatNumber).join('-'))
}


const formatstrTime = strdate => {
  let date = new Date(strdate)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const GetDistance = (lat1,  lng1,  lat2,  lng2 ) =>{
  let radLat1 = lat1*Math.PI / 180.0;
  let radLat2 = lat2*Math.PI / 180.0;
  let a = radLat1 - radLat2;
  let  b = lng1*Math.PI / 180.0 - lng2*Math.PI / 180.0;
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
  Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
  s = s *6378.137 ;// EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000;
  return s;
}

/*
module.exports = {
  formatTime: formatTime,
  formatDate:formatDate,
  formatMonth:formatMonth,
  formatToday:formatToday
}
*/
