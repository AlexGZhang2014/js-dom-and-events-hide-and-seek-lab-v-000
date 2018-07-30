function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll(".ranked-list");
  let firstList = lists[0].children;
  let secondList = lists[1].children;

  for (let i = 0; i < firstList.length; i++) {
    firstList[i].innerHTML = parseInt(firstList[i].innerHTML) + n;
  }

  for (let j = 0; j < secondList.length; j++) {
    secondList[j].innerHTML = parseInt(secondList[j].innerHTML) + n;
  }
}

function deepestChild() {
  return document.querySelector("div#grand-node").querySelector("div div div div div");
}
