let counter = 0;
// function add(){
//     let counter  =0 ;
//     counter += 1;
// }

const  add = function(){
    counter  =0 ;
    return function (){
        counter++;
        return counter;
    }
    
    //return inc;
};

//add();
//add();
//add();
const plus= add();
//console.dir(plus)
function myFunction(){
    console.dir(add)
    
   //console.log(add);
   //console.log(window);
   

    document.getElementById("demo").innerHTML = plus();//`counter is : ${counter}` ;
}

