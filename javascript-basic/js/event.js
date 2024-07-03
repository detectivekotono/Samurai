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
// textFormというname属性を持つフォームを取得する
document.forms.textForm;
// textBoxというname属性を持つテキストボックスを取得する
document.forms.textForm.textBox;
// textBoxというname属性を持つテキストボックスの値を取得する
document.forms.textForm.textBox.value;
// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById("count-btn");
// HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener("click", () => {
  // テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;
  // 取得した文字列の文字数を出力する
  console.log(text.length + "文字");
});

const areaBtn = document.getElementById("area-btn");
// HTML要素がクリックされたときにイベント処理を実行する
areaBtn.addEventListener("click", () => {
  const area = document.forms.areaForm.area.value;
  console.log(area);
});
//os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn=document.getElementById("os-btn");
//HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener("click",()=>{
  //すべてのチェックボックスを配列風のデータで取得する
  const items =document.forms.osForm.os;
//繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
for (let i = 0; i < items.length; i++) {
  if (items[i].clicked) {
    console.log(items[i].value);
  }  
}
});