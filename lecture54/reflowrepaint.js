// performance improvement  
// suppose think we have two code blocks and we have to calculate that the speed of two block  or compare the speed of two blocks we can calculate that ,,
// now we will understand with example think we have add hundered paragraph tags using javascript using DOM maniplulation , we will add these hundered paragraphs with different techniques or methods 
// in js there is a method called performance.now() method it is used to calculate precisely timestamp of the code to run ,, performance.now() is a method provided by the browser's Performance API that returns a high-resolution timestamp measured in milliseconds. This timestamp is useful for precise performance measurements because it offers sub-millisecond accuracy.
// how to use it we should add performance.now() method before the code begning and after the end of code ,, and we can calculate it by end time - start time const duration = endTime - startTime; 


// code 1
// in code 1 we are adding 100 paras to the body , here we are created one element para and we added some text in it and now we added it to the document.body 

const t1 = performance.now();
for(let i=1; i<=100;i++){
    let para = document.createElement("p");
    // here we are created one element para 
    para.textContent= "this is para" + i;
    // and we added some text in it 
    document.body.appendChild(para);
    // and now we added it to the document.body 
}
const t2 = performance.now();
// the below line is calculated timestamp 
console.log("time duration of code1 is:", t2 - t1);


// code 2 
// in code 2 we created on div here , and now we created one para element and we have added some text or content in it , now this para is appended or added to the div , now the div is appended to the document.body 
const t3 = performance.now();

let mydiv = document.createElement("div");
// we created on div here 
for(let i=1; i<=100;i++){
    let paras = document.createElement("p");
    // and now we created one para element 
    paras.textContent="this is paras" + i;
    // and we have added some text or content in it
    mydiv.appendChild(paras);
    // now this para is appended or added to the div
}

document.body.appendChild(mydiv);
// now the div is appended to the document.body 
const t4 = performance.now();

console.log("time duration of code2 is:", t4 - t3);

// time duration of code1 is: 0.4000000059604645
//  time duration of code2 is: 0.20000001788139343

// now we will discuss about reflow and repaint 
// reflow : it means it is the process of calculating position and dimensions of the element , it performs intensive tasks , it means hamara element ka kya size or width some spaces of elements it calculates and fixes the size for element 
// Reflow, also called layout, is the process where the browser calculates the positions and sizes of elements on the page.
// It happens when the structure of the page changes. This could be because you add, remove, or change elements, or modify styles that affect layout (like width, height, font size, padding, margin, etc.).
// Imagine reflow as rearranging furniture in a room. If you move one large piece (like a couch), you might have to remeasure the space and reposition other items. If you do this often, the room keeps getting rearranged, which takes time and effort.
// it is slower 

// repaint: it is the process of painting or printing the element pixel by pixel ,Repaint is the process of updating the appearance of elements on the screen without changing their layout.
// Repaint is like repainting a wall in your room—you're changing the color, but the layout (positions of furniture) remains the same. It takes less effort than moving furniture around, but if you repaint too often, it still uses up time and resources.
// it is faster 

// if our code wants to become faster then there must less reflow and repaint in the code , jitne kam reflow and repaint honge utna code faster hoga , jitna zyada hoga utna code slow hoga 


// now we will understand y our code 1 is slower than code 2 
// first here we have created a 1st para and added a content to it and now we appended to document.body , when we append to the document now we have to render the content when we want to render the content it taked one reflow and one repaint , now we create and add content to 2nd para and we are appending it to the document when we add to the document we render content when we render the content there will be one reflow and one repaint ,, and so on for 100 paras there will be 100 reflows and 100 repaints 

// now we will understand y our code 2 is faster than code 1 
// here first we have created a div , and now we have created a 1st para and added a content to it and now we append it to the div , here we dont repaint becoz here we added a para tag to div so we are not rendering the content in ui here we are not adding the para tag to the document (dom) if we add the elements to dom then there will be one reflow and one repaint , now we created 2nd para and added to it and appended it to the div again here we dont repaint ,, and so on we added 100 para tag to the div ,, 
// now we are adding the div tag to the document.body (dom) now we are rendering the content to ui , hence now we perform one reflow and one repaint , when we are adding the content to the document we perform one reflow and one repaint 
// and code 2 was faster than code 1 , becoz of less reflow and repaint 


// the best practice for writing the code that must be faster using documentfragement  now we will discuss about documentfragment
//  document fragment is a lightweight document object that has no parent it is used for adding the nodes (element and texts) before they are added to the main document (DOM)
// it is uses are when add the element to it , it doesnt make reflow and repaint 
// Changes made to a DocumentFragment do not cause reflow or repaint of the main document until the fragment is inserted into the DOM.
// When you need to add or modify multiple DOM elements, doing so one-by-one in the main document can trigger repeated reflows and repaints, which are expensive operations. By building your changes in a DocumentFragment and then appending the fragment to the DOM in a single operation, you minimize these performance costs. ,,,,, when we add the elements it doesnt take reflow and repaint 
// synatax for creating the document fragement 
// let fragment = document.createDocumentFragment(); 
// ham jab bhi koi element insert karte hai ispe tho nahai ye reflow lega and repaint lega , is ye bohot hei fast hoga 

// best practice 
let fragment = document.createDocumentFragment();
for(let i=1; i<=100;i++){
    let paragraphs = document.createElement("p");
    paragraphs.textContent = "this is paragraphs " , i;
    // in below line we are adding paragraphs elements to the documentfragment so there is no reflow and no repaint 
    fragment.appendChild(paragraphs);
}
// the below line takes one reflow and one repaint , becoz we are adding the fragment to the actual document (DOM) 
document.body.appendChild(fragment);

// if we want to save reflows and repaint we can use documentfragment 