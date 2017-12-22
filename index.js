function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  let grandNode = document.getElementById('grand-node');
  let nextNode = grandNode.children[0];

  while (nextNode) {
    grandNode = nextNode;
    nextNode = grandNode.children[0];
}
  return grandNode;
}
