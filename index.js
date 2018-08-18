function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
    return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild(){
  let current = document.querySelector('#grand-node')
  // let arr = []
  // while(current){
  //     arr.push(current);
  // 	  current = current.children[0]
  // }
  // return arr[arr.length-1]
  // while(current){
	//    if(current.childElementCount === 0) return current
	//    current = current.firstElementChild
  // }
  divs = current.querySelectorAll('div')
  // for(let i=0; i< divs.length; ++i){
	//    currentDiv = divs[i]
  // }
  return divs[divs.length-1]
}
