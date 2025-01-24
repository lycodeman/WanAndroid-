function isToday(date) {
  const today = new Date();
  
  // 获取今天的年月日
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();  // 月份从 0 开始
  const todayDay = today.getDate();
  
  // 获取输入日期的年月日
  const inputDate = new Date(date);
  const inputYear = inputDate.getFullYear();
  const inputMonth = inputDate.getMonth();
  const inputDay = inputDate.getDate();
  
  // 判断年份、月份和日期是否相同
  return todayYear === inputYear && todayMonth === inputMonth && todayDay === inputDay;
}
module.exports = {
  isToday: isToday
}