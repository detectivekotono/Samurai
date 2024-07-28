function displayCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  console.log(`現在の年月日は${year}年${month}月${day}日です`);
}
displayCurrentDate();
