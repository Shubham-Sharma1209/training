const data={
    name: "Shubham",
    last_name: "Sharma",
    subjects:["coa","os","dbms"],
    branch:{
        name: "CSE",
        HOD: "Divya"
    }
};



// function dowork(val,ind,arr){
//     console.log(val,ind,arr); 
// }

// var a=[1,2,3,4,5]

// a.map(dowork);


const ar=({name,branch})=>{
    console.log(name,branch)
}

// function dofilter(val){
//  return val>3;
// }
ar(data);
// console.log(a.filter(dofilter));

function myfunc()
    {
        var x=document.getElementById("demo").innerHTML;
        // console.log(x,typeof x);    
        // if (x==="Color Change!!"){
        //     x="color";
        // }
        // else{
        //     x="Color Change!!";
        // }
        x= x==="Color Change!!" ? "Color" : "Color Change!!";
        document.getElementById("demo").innerHTML=x;    
        // window.alert('Hey');
        // document.styleSheets="background"
    }