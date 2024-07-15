//東京都の天気予報データを取得するためのURL(270000)部分を変更すると地域が変わる
const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json";
//イベント処理の対象となるボタン
const button = document.getElementById("ajax-btn");
//ボタンのクリック時にイベント処理を実行する
button.addEventListener("click", () => {
  //気象庁のwebサイトにリクエストを送信し、天気予報のデータを取得する
  fetch(url)
    //サーバーからAjaxレスポンスを受け取った時の処理
    .then((response) => response.json()) //JSON形式のデータに変換
    .then((data) => {
      //JSONデータから「東京の明日の天気」を抽出して表示
      const weathers = data[0].timeSeries[0].areas[0].weathers[1];
      console.log("東京の明日の天気：" + weathers);
    });
});
