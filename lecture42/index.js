console.log("loops ka gyann");



for (let i = 1 ; i<=5; i++){
    console.log("printing numbers :" , i);
    // console.log("we will see difference :" , i); it show error becoz it block scoped , if we use var then it will show the output
}
// reverse from 5 to 1

for (let a = 5; a>=0 ; a--){
    console.log("reverse printing:", a);
}
// 2 table printing
for ( let t2 = 0; t2<=20 ; t2 +=2){
    
    console.log("two table is :" , t2);
}
// break and continue using 

for(let ne = 1; ne<=5; ne++){
    if(ne===4){
        break;
    } else {
        console.log("using break in for loops :", ne);
    }
}

for ( let ma = 1; ma<=5; ma++){
    if(ma ===4){
        continue;
    } else {
        console.log("using continue in for loops", ma);
    }
}
// while loops
let m= 1;
while(m<10){
    console.log(m);
    m++;
}
console.log("we will see diff :" , m);

let s = 5;
while(s >= 0){
    console.log("reverse printing for while :" , s);
    s--;
}

let t = 0;
while(t <20){
     t += 2;
     console.log("two table for while : " , t);
}

let n =1;
let k =2;
while(n<=10){
    let two = n * 2;
    n++;
    console.log("another method :" , two);
}

// while loops using breaks and continue
let br= 1;
while(br<=5){
    if(br===4)
        break;
    else
    console.log("using break in while loops:", br);
    br++;
}

let con = 1;
while (con <= 5) {
    if (con === 4) {
        con++; // Increment before using 'continue' to avoid infinite loop
        continue; // Skip the rest of the iteration when con is 4
    } else {
        console.log("using continue in while loops:", con);
    }
    con++; // Increment at the end of the loop
}

// do while loops 

let sh = 1;
do{
    console.log("printing do while :" , sh);
    sh++;
} while(sh<=5);
// reverse printing 

let rev= 5;
do{
    console.log("reverse printing do while :" , rev);
    rev--;
} while(rev>=0);

// printing two tables another way
let one = 2;
let two = 1;
do{
    let mul = one * two;
    console.log("printing anothere way in do while loops :", mul);
    two++;
} while(two<=10);

// printing two tables 
let v = 0;
do{
   
   v += 2;
   console.log(v);

} while( v <20);

// using breaks and continue in do while loops 

let ex = 1;
do{
    if(ex===4){
        break;
    }
    else{
        console.log("using breaks in do while :", ex);
        ex++

    }
   
} while(ex<=5);

let ex2 = 1;
do{
    if(ex2===4){
        ex2++;
        continue;
    }
    else{
        console.log("using continue in do while loops:", ex2);
        ex2++;
    }
} while(ex2<=6);


// some shit below which i have been written in starting of javascript 

console.log("loops");
// now we will study about for loops , while loops and do while loops in Javascript 
// loops are used to perform a task multiple times which also helps in writing less code 
// At the outset of learning to code in any specific language, grasping the concept of "loops" and their functionality is paramount. Loops are integral to maintaining the readability of our code and reducing pressure on the system by minimizing the number of lines needed to accomplish a given task. This directly enhances the quality of the code, improves runtime efficiency, and saves considerable time that would otherwise be spent writing extensive code.
// When discussing loops in computer programming, it's essential to note that there are primarily three types commonly used.

// (a) For loop
// The most fundamental and widely used loop is 'for' loop. The "for" loop in JavaScript allows us to execute a block of code repeatedly until a specified condition is met. It's particularly useful when we know how many times you want to iterate.
// syntax :
// for (initialization; condition; increment/decrement) {
//     // code block to be executed
// }
// initialization: This is the first thing executed before the code block execution. This part initializes the loop control variable.

//  Condition: This part specifies the condition for continuing the loop. If the condition evaluates to true, the loop continues; if it evaluates to false, the loop terminates.

//  Increment/Decrement: This part modifies the loop control variable. It is executed after each iteration of the loop.

for(let a = 1; a<=5; a++){
    console.log(a);
}
// it is for loop were intialiazation takes place and checks condition and enters the brackets executes all the code with in the bracket after wards increment or decrement takes place and again checks the condition 

for(let i = 5 ; i>=1; i--){
     console.log(i);
}

for(let m = 2 ; m<=20; m=m+2){
  console.log(m);
}
//  here 2 table is printed 
// by using break we will use loops 
for( b= 1; b<=6; b++){
    // here it checks if  b==4 then it will break and comes out if its not eqaual then console,log(b) will be printed 
    if(b==4){
        break;
    } else{
        console.log(b);
    }
}
// out put will be 1 2 3 
// now we will see about continue it is used to skip a particular iteration ,, suppose think there are four iteration. 
// iteration 1,iteration 2 ,iteration 3 ,iteration 4: if we placed a continue keyword in iteration 3 it will be skipped it is know as continue keyword
for( c= 1; c<=6; c++){
    if(c==4){
        continue;
    } else {
        console.log(c);
    }
}

// (b) While loop
// The "while" loop in JavaScript provides another method to execute a block of code repeatedly based on a specific condition. The primary difference between the 'for' loop and the 'while' loop lies in their syntax, also we use 'while' loop when the number of iterations is not predetermined or when we want to keep looping until a specific condition is met.
// syntax:-while (condition) {
    // code to be executed
// }
// here intialization is done at starting and if condition is true it enters inside the brackets and executes the loop logic code 

let s2 = 2;
while( s2 <= 20){
    console.log(s2);
    s2= s2+2;
    
}
// here 2 table is printed

let revv = 10;
while( revv >= 0){
    console.log(revv);
    revv--;
}
// here reverse from 10 to 0 is printed

let str = 1;
while(str<=5){
    console.log(str);
    str++;
}
// here 1 to 5 is printed
let three=3;
while(three<=30){
    console.log(three);
    // if we use console.log here it will print single value 
    three= three+3;
}

// here three table is printed 
// now we will do this in while loop
// for( b= 1; b<=6; b++){
//     // here it checks if  b==4 then it will break and comes out if its not eqaual then console,log(b) will be printed 
//     if(b==4){
//         break;
//     } else{
//         console.log(b);
//     }
// }
let bi=1;
while(bi<=6){
    if(bi==4){
        break;
    } else {
        console.log(bi);
    }
    bi++;
}
// now we will use continue 
let hi=1;
while(hi<=6){
    if(hi==4){
        hi++;
        // here when 4==4 then hi++ will increments and it becomes 5 so we will not fall in infinte loop
        continue;
    } else 
        console.log(hi);
        hi++;
        // here we are doing hi++ for increment 
}



// (c) Do-while loop
// The 'do-while' loop in JavaScript is similar to the 'while' loop but, with one key difference : the condition is checked after the loop body executes. Due to this property if we use 'do-while' loop, the code inside the loop will execute at least once, regardless of the initial condition.
// here the loop logic is executed and after the loop condition is checked , here atleast one time the loop will execute 
// do {
    // code to be executed
// } while (condition);
// 🔸 The code block inside the "do" section is executed first.

// 🔸 Then, the condition in the "while" section is evaluated.

// 🔸 If the condition is true, the loop repeats; otherwise, it terminates.
// here first initialization is done 
// after wards do{ inside the bracket is executed} and upadation is also done after that the condition has checked 
let dow = 25;
do{
    console.log(dow);
    dow++;
} while(dow<=30);
// using do-while we will print reverse 
let rever=5;
do{
    console.log(rever);
    rever--;
} while( rever >= 0);
// now we will print 2table

let tab = 2;
do{
    // here ek baar tho execute hogo do says do nna excute me ,, and 1st iterartion is executed and after it executes
    console.log(tab);
    tab= tab+2;
} while(tab <=20);

// now we will print 3tables 
let thri = 3;
do{
    console.log(thri);
    thri = thri+3;
} while(thri <=30);
// using break 
let brek = 1;
do{
    if(brek==5){
        break;
     } else {
        console.log(brek);
        brek++;
     }
     

} while(brek<=6);
// using continue 
let contin = 1;
// do{
//     if(contin==4){
       
//         continue;
//         contin++;
//     }
//     else{
//         console.log(contin);
//         contin++;
//     }
// }while(contin<=6);

