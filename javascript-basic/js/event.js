// output-btnというidを持つHTML要素を取得し、定数(btn)に代入
const btn = document.getElementById("output-btn");
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click", () => {
  console.log("クリックされました");
});
// output-btnというidを持つHTML要素を取得し、定数(btn)に代入
const addBtn = document.getElementById("add-btn");
// parent-listというidを持つHTML要素を取得し、定数(btn)に代入する
const parentList = document.getElementById("parent-list");
addBtn.addEventListener("click", () => {
  // il要素がクリックされた時にイベントを処理する
  const childList = document.createElement("li");

  // 作成されたli要素に「これはリスト要素です」というテキストを追加する
  childList.textContent = "これはリスト要素です";
  // 作成したli要素をul要素の子要素として末尾に追加する
  parentList.appendChild(childList);
});
