function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  const grand = document.getElementById('grand-node').querySelectorAll()

  let current = grand
  let next = []

  while (current) {

    if (criteriaFn(current)) {
      return current
    }

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }

    current = next.shift()
  }
  return current;
}
