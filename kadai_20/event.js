// HTMLの要素を取得
const btn = document.getElementById("btn");
const text = document.getElementById("text");
// クリックしたときの動作を指示する
btn.addEventListener("click", () => {
  // text.textContentは↑の動作をしたとき、HTMLにあるTextを書き換える
  text.textContent = "クリックされました！";
});
