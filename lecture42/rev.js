// loops in js 
let n=5;
for ( i =1; i<=n ; i++){
    console.log(i);
}

for(let i = 2; i<=20; i+=2){
    console.log("two for :", i);
}
// it is not good pratice to use directly i js will consider it as global variable , we must use let i =1;

// while loops
let s = 1;
while(s<=10){
   
   console.log("s is ",s);
   s++;
   
}
console.log("s", s);

let t = 2;
let t1 = 1;
while (t1<=10){
    const t2 = t * t1;
    console.log(t2);
    t1++;
}

// using break and continue
let con = 1;
while(con < 6){
    if(con==4){
        con++;
        continue;
        
    }
    else{
        console.log(con);
        con++;
    }
}

let brek = 1;
while(brek<6){
    if(brek==4){
        break;
    }
    else{
        console.log(brek);
        brek++;
    }
}

// do while loops in js 

let e = 1;
do{
    console.log("e is ",e);
    e++;

} while(e<=10);

// using break and continue 
let con1 = 1;
do{
    if(con1==4){
        con1++;
        continue
    }
    else{
        console.log(con1);
        con1++;
    }
} while(con1<6);

let brek1 = 1;
do{
    if(brek1==4){
        break;
    }
    else{
        console.log(brek1);
        brek1++;

    }
}while(brek1<6);

// strings important 
// ways of creating string 
let str1 = "hello jee";
let str2 = 'love babbr';
let str3= `rawal and 
Bharg are 
the best rapper`;
let str4 = new String("sab chahiye");
let str5 = new String('pew pew ');
let str6= String ("jungle kutte");

console.log( "str1 is:",typeof(str1));
console.log("str2 is:",typeof(str2));
console.log( "str3 is:",typeof(str3));
console.log( "str4 is:",typeof(str4));
console.log("str5 is :",typeof(str5));
console.log("str6 is :",typeof(str6));
// using string construtor we create a object not a primitive datatype which is stored in heap , and a reference of this is stored in stack here str4 , str5 are the string constructors 
//  when we use new String it creates the objects of strings,,, With new (new String()): Creates a String object
// when we dont use new it creates string primitives which 
// let sum = String("rust is so hard"); this is primitive string stores in values in stack 

let newstr1 = "this is rawal";

let newstr2 = new String ("this is rawal");
let newstr3 = `this is rawal`;

console.log("comparing string primitive and string object" , newstr1 === newstr2);
console.log("comparing string primitives :", newstr1 === newstr3);

// string concatinations 

let new_1 = "rawal";
let new_2= "Bharg";
console.log("concatinate using + :", new_1 + new_2);
console.log("concatination:", new_1 + "x" + new_2);

console.log("concatination using concat keyword:", new_1.concat(new_2));
console.log("concatination using concat keyword:", new_1.concat("x",new_2));
// now using template backtics 
console.log("concatination using template backticks:", `${new_1} x ${new_2}`);
console.log("concatination using bacticks :", ` ${new_1} ${new_2}`);

// calculate length of strings in js 
console.log("length of string is :" , new_1.length);
// upper case and lower case 
let upper = "vinod";
let lower= "BIRADAR";
console.log(" converting to upper case:", upper.toUpperCase());
console.log("converting to lower case:", lower.toLowerCase());

let substr = "dikkatein by rawal";
console.log("using substring :", substr.substring(3,8));



