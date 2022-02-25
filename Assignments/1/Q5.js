const arr = ['2533876430',  //true  false
            '768710587',    //false true
            '3216838479',   //true  false
            '88194349',     //false true
            '6954209272'    //true true
            ]
arr.forEach( element => {
    console.log(element.length == 10)
    console.log(['6', '7', '8', '9'].includes(element.charAt(0)))
})
