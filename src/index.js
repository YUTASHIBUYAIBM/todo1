import "./styles.css";

//テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  nocompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deletFromnocomplist = (target) => {
  document.getElementById("nocomp-list").removeChild(target);
};

//完了リストから指定の要素を削除
const deletFromcomplist = (target) => {
  document.getElementById("comp-list").removeChild(target);
};

//未完了リストに追加する関数
const nocompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    //押された完了ボタンの親要素（div）を未完了リストから削除
    deletFromnocomplist(completebutton.parentNode);
    //完了リストに追加する要素
    const addTarget = completebutton.parentNode;
    //ToDo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すbuttonを生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";

    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親要素（div）を完了リストから削除
      deletFromcomplist(backbutton.parentNode);

      //ToDo内容テキストを取得
      const text = backbutton.parentNode.firstElementChild.innerText;

      nocompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了リストに追加
    document.getElementById("comp-list").appendChild(addTarget);
  });

  //button(削除)生成
  const deletbutton = document.createElement("button");
  deletbutton.innerText = "削除";
  deletbutton.addEventListener("click", () => {
    //押された削除ボタンの親要素（div）を未完了リストから削除
    deletFromnocomplist(deletbutton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletbutton);

  //未完了のリストに追加
  document.getElementById("nocomp-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
