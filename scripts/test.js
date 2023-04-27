const main = document.querySelector("#main");
const qa = document.querySelector("#qa");
const result = document.querySelector("#result");
const qNum = 10;

let ansList = [];

function startQA() {
  main.style.display = "none";
  qa.style.display = "block";
  nextQA(1);
}

function nextQA(idx) {
  // 마지막 페이지 -> 결과 페이지로
  if (idx == qNum + 1) {
    qa.style.display = "none";
    result.style.display = "block";
    console.log(ansList);
  }

  let q = document.querySelector("#question");
  q.innerHTML = QAList[idx].q;

  for (let i in QAList[idx].a) {
    getAns(QAList[idx].a[i], idx, i);
  }
  let progress = document.querySelector("#progress");
  progress.value = (100 / qNum) * idx;

  let pageNum = document.querySelector("#page-number");
  pageNum.innerHTML = idx + "/" + qNum;
}

function getAns(data, idx, i) {
  let a = document.querySelector(".ansBox");
  let ans = document.createElement("button");
  ans.innerHTML = data;
  ans.className = "box";
  ans.id = "answer";
  a.appendChild(ans);

  ans.addEventListener(
    "click",
    function (e) {
      var children = document.querySelectorAll("#answer");

      // 몇번째 답을 선택했는지 저장
      ansList[idx - 1] = i;

      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.display = "none";
      }

      nextQA(++idx);
    },
    false
  );
}
