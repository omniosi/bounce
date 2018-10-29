var btnone = document.getElementsByClassName('one')[0],
    btntwo = document.getElementsByClassName('two')[0],
    btnthree = document.getElementsByClassName('three')[0],
    btnfour = document.getElementsByClassName('four')[0],
    btnfive = document.getElementsByClassName('five')[0],
    btnsix = document.getElementsByClassName('six')[0]

setTimeout(function(){
  btnone.classList.add('hide')
  btntwo.classList.remove('hide')
},1000)

setTimeout(function(){
  btntwo.classList.add('hide')
  btnthree.classList.remove('hide')
},2000)

setTimeout(function(){
  btnthree.classList.add('hide')
  btnfour.classList.remove('hide')
},3000)

setTimeout(function(){
  btnfour.classList.add('hide')
  btnfive.classList.remove('hide')
},4000)

setTimeout(function(){
  btnfive.classList.add('hide')
  btnsix.classList.remove('hide')
},5000)