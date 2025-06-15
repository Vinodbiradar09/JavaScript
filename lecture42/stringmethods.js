console.log("string methods in js all methods");
// there are properties and methods in js 
// only one property is there at java script ,, for property we use variable name.property no brakets required 
// there are several methods when we use methods we use variable name.method() and brackets complusory
// property 
let newstr = "sab chahiye ";
console.log("lenght of string:", newstr.length);
let str = " rawal and Bharg";
// substring method used to extract a substring from string  ,, it doesnt supports negative values if negative value is there it considers it has 0 
console.log("substring extraction:", str.substring(3,8));
// slice method is used to extract a string from string based on the start index and up to end index it allows negative indexing 
console.log("slice using:", newstr.slice(2,6));
console.log("slice based on the neagtive indexing:", newstr.slice(-6,-3));
// output ahi
// Supports negative indices:
// Negative values count from the end of the string.
// For example, -1 refers to the last character, -2 to the second-to-last, and so on.

// substr method is used to extract the substring from start index to specified numbers of characters it extracts from the start index , and second paramter value specifies the number of characters to be extracted 
console.log("extracting the string from start index and specified charaacters:", str.substr(3,7));
let strs = "JavaScript";

console.log(strs.substr(0, 4)); // "Java"
// Starts at index 0 and extracts 4 characters (0,1,2,3)

console.log(strs.substr(4, 6)); // "Script"
// Starts at index 4 and extracts 6 characters


// method for upper case and lower case 
console.log("upper case converting:", newstr.toUpperCase());
console.log("lower case converting Bharg to bharg:", str.toLowerCase());
// concatination of the strings
console.log("concatinating two strings:", newstr.concat(" ablum",str));
// methos for charAT accessing the specified character from the string 
console.log("accessing the specific character from the string:", newstr.charAt(6));
// method for  charAT accessing the specified characters asci value from the string 
console.log("accessing the specific characters ascii value:", str.charCodeAt(7));
// trim methods in string it is used for trimming the whitespaces in the strings 
console.log("removing all the whitespaces from the string:",str.trim());
console.log("removing starting the whitespaces from the string:",str.trimStart());
console.log("removing ending the whitespaces from the string:",str.trimEnd());
// method for accessing the specified char same as charAT but AT allows negative accessing
console.log("accessing the specifeid char based on negative value :", str.at(-3));
// method for repeat in strings the repeat value must be 0 or greater then 0 , no decimal value is accepted 3.4 is considered as the 3 only 
console.log("repeating the sab chahiye 3 times:", newstr.repeat(3));
console.log("repeating the sab chahiye 3 times:", newstr.repeat(3,","));
// methods for searching the characters index if found returns the index or returns -1 , if not found ,, we have to mention the specific characters .indexOf("ah"); it returns the index value of that
console.log("searching:", newstr.indexOf("ah"));
// method for includes , startswith(sub), endswith(sub) ,, it checks whethere the specified substring is present or not in the string if it is present then returns true not means returns false ,,, important to checks for the spaces also 
console.log("checks for the specified substring is present or not:", str.includes("wal"));
console.log("checks for the specified string starts in the string:",str.startsWith(" raw"));
console.log("checks for the specified string ends in the string:",str.endsWith("arg"));

// methods for replacing the characters of the strings 
let mainstr = "dikkatein"
console.log("replacing the single character:", mainstr.replace("k","m"));
// methods for replacing all the characters from the string 
let mainstr2= "javascript";
console.log("replacing all the characters:", mainstr2.replaceAll("javascript", "nodejs"));
// split methods for spliting the string into an array of substring 
let mainstr3= "javascript , nodejs, c++, mongodb";
console.log("spliting the string into array substring:", mainstr3.split(","));
let mainstr4="javascript is fun";
console.log("splitting the string into substring of arrays:", mainstr4.split(" "));


// there are still many string methods we will learn in a while 


// now we will discuss about some string important topics which are very important 
// we will discuss about the string primitives and string objects in 
// string primitives means which are stored in stack and string objects means which are stored in the heap and a reference of it is stored in the stack 
// important note in javascript strings are immutable if we modify the string it creates a new string doesnt modify the existing string , even it is string primitive and string objects 
let strin = "lunch break";
// here it is string primitive 
let strin1= new String("lunch break");
//  here it is string objects
console.log("comparing string primitives and string objects:", strin === strin1);

// now we will modify both string primitives and objects
console.log("modifying:", strin.replace("b","B"));
console.log("modifying string object:", strin1.toUpperCase());
console.log("original string is :", strin);
console.log("original string object:", strin1);

// Immutability of Strings:

// Strings are immutable in JavaScript. This means you cannot change the contents of an existing string.
// Methods like .replace() or .toUpperCase() do not modify the original string; they return a new string based on the original value.
// in our example our strin contains "lunch break" , when we call strin.replace("b", "B"); this method returns a new string "lunch Break" , strin doesnt updated the original string is not updated only the methos returns the new string , the only way to modify the original string is reassigning the value 
// similarly in strin1 it represents the ("lunch break") string only the method .touppercase returns the new string ("LUNCH BREAK"),  the strin1 object doesnt modify the string 
// The "old" string is still stored in the variable (strin or strin1). JavaScript methods simply compute a new string and return it. If you want to update the variable to hold the modified string, you need to explicitly reassign it:
// Even though you see the modified string in the output of the console logs, the original variables (strin and strin1) are not automatically updated. They still hold the original string values. The methods only return the new modified string without altering the original value.

// If you need the modified string to replace the old value, you must assign the result of the method back to the variable.


let  ressign = "Original string";
ressign = "reassign new string";
console.log("reassiging the string:", ressign);

// now we will see how each objects of strings have diffrent references 
let ref1 = " string object";
let ref2 = new String(" string object");
let ref3 = new String(" string object");
let ref4 = ref2;
// when we assign ref2 ka reference pointer to ref4 , only reference is copied not a actual objects are copied 

// we have created three string in which two are the object strings and one is the primitive strings 
// we will compare all of these 
console.log("we are comparing ref1 and ref2:", ref1 === ref2);
// values are same but the datatypes are different 
console.log("we are comparing ref2 and ref3:", ref2 === ref3);
// values and datatypes are same but the references for both string are different 

// important when we compare the objects we are not comparing the value and type instead of it we are the reference of the objects whethere the both objects refers to same memmory location if they dont refer to same memmory location then it returns false , if the both objects share same memmory location then it will return true 
// example we are checking ref2 and ref3 both objects reference are diffrent so it returns false
console.log("checking with loose quality:", ref2 == ref3);

console.log("now we are checking ref2 and ref4 which shares same memmory location:", ref2 === ref4);

// some important topics 
let newref1 = new String ("laggan");
let newref2 = new String ("laggan");
let newref3 = newref1;
// now we have created two objects which have different references and a variable which have newref1 references now newref1 and newref3 have same references it they point to same objects in heap memory ,, in newref3 only the reference is copied not the actual object or new object is created only the reference is copied in newref3 
// when we assign the object to the variable the variable holds the reference of that object in stack and the actual object is stored in the heap 
// when changes are made to the newref1 the changes are visible to the newref3 

newref1 = ("new changes");
// here we are reassigning the variable we are not modifying the object , when we reassign it becomes the primitive string 
// When you do newref1 = ("new changes"), you are not modifying the object in the heap. Instead, you are changing the reference stored in newref1 so that it now points to a new primitive string ("new changes").
// console.log( "changes are made in the objects:",newref1);

// since we have changed the value of the object now newref3 contains the reference of the newref1 when we try to print newref3 it will print laggan only becoz  because it still holds the old reference pointing to the object containing "laggan".
console.log("printing newref3:", newref3);
// visulaization 


// Before Reassignment:

// newref1 ------> [Object: "laggan"]
// newref3 ------> [Same Object: "laggan"]

// After Reassignment (newref1 = "new changes"):
// newref1 ------> "new changes"  (a primitive string, not an object)
// newref3 ------> [Object: "laggan"]  (still the same object)

// Conclusion:
// Only the Reference Is Copied:
// When you assigned let newref3 = newref1;, newref3 copied the reference from newref1; it did not create a new object.

// Reassigning newref1 Doesn't Affect newref3:
// When you later reassign newref1, that variable now points to a new value (a primitive string), but newref3 continues to point to the original object with "laggan".

// That's why printing newref3 still outputs "laggan". Let me know if you need any further clarification!

// little bit about objects 
let obj = {
    name : "vinod",
    age : 20
};

let obj1 = obj;
// now obj1 have the reference of obj , the obj variable have the reference of the objects such as name : "vinod", age : 20,, now the reference same reference is copied to the obj1 

// when we try to modify 

obj.name = "veeresh";
console.log(obj1.name);
// now changes are made to obj1 also becoz these shares same references 

// another example
// Suppose we call a method that appears to change the value (although strings are immutable, imagine a scenario with objects)
// For demonstration, let's assume we have an object instead:
let obj2 = { value: "hello" };
let obj4 = obj2;
obj2.value = "world";

console.log(obj4.value); // "world" because both point to the same object.
// we can extract  the  string primitives  from the string objects when we call the valueOf and toString method 
let str5= new String("some value");
let str6= new String("some value");
let str7= "some values";
// using valueOf and toString se ham string primitive kho extract kar sakte hai 
console.log("we are extracting the string primitive from the string object:", str5.valueOf() === str6.valueOf());
console.log("we are extrcting the string primitive from the string object using toString method:", str5.toString()=== str6.toString());

// note important when we call valueOf and toString method it doesnot replace or convert the string object ,, it only extracts the string primitive from the string object when it is called

console.log("checking the typeof of str5:", typeof(str5));
console.log("checking the typeof of str5:", typeof(str6));
// output is still objects becoz methods doesnt change the original string
// Why Doesn't the Object Change?
// .valueOf() and .toString() do not modify the object; they just return the primitive string when called.
// str5 and str6 are still String objects in memory.
// Only the returned value from .valueOf() and .toString() is a primitive string.
// If you check typeof str5, it still remains "object", but typeof str5.valueOf() is "string".

// str5 = str5.valueOf(); // Now str5 is a primitive string
// str6 = str6.toString(); // Now str6 is a primitive string

// console.log(typeof str5); // "string" ✅ (Now it's primitive)
// console.log(typeof str6); // "string" ✅ (Now it's primitive)
// now the above code permanently reassigns the string objects to string primitives 

















