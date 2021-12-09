//function add (){
  //  let x = 10;

   function submit(){
       console.log('submitted')
   }
    let obj ={
    name :"durga",
      personName :function(){
          
          this.submit();
      }
    }
    //return obj;
    
//};
//const obj =add();
 

 let ref =submit.bind(obj);
 //console.log(this.obj);
 
//console.log(ref())