const main = document.querySelector("#main");
const qa = document.querySelector("#qa");
const result = document.querySelector("#result");
const qNum = 10;

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
  }

  let q = document.querySelector("#question");
  q.innerHTML = QAList[idx].q;
  console.log(QAList[idx].a);

  for (let i in QAList[idx].a) {
    getAns(QAList[idx].a[i], idx);
  }
  let progress = document.querySelector("#progress");
  progress.value = (100 / qNum) * idx;

  let pageNum = document.querySelector("#page-number");
  pageNum.innerHTML = idx + "/" + qNum;
}

function getAns(data, idx) {
  let a = document.querySelector(".ansBox");
  let ans = document.createElement("button");
  ans.innerHTML = data;
  ans.className = "box";
  ans.id = "answer";
  a.appendChild(ans);

  ans.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll("#answer");

      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.display = "none";
      }

      nextQA(++idx);
    },
    false
  );
}
