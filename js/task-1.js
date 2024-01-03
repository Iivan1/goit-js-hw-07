const elementList = document.querySelectorAll(".item");
console.log("🚀 Number of categories :", elementList.length);
elementList.forEach((item) => {
  const titleItem = item.firstElementChild.textContent;
  const totalItem = item.lastElementChild.children.length;
  console.log("🚀 Category : ", titleItem);
  console.log("🚀 Elements : ", totalItem);
});
