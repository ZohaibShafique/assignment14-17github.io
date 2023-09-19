// 1. Declare an empty array using JS literal notation to store 
// student names in future.

// let a = [];
// console.log(a);

// 2. Declare an empty array using JS object notation to store 
// student names in future.

// let a = [{}];
// console.log(a);

// 3. Declare and initialize a strings array.

// let a = ["Zohaib","21","zabby450@gmail.com"];
// alert(a);

// 4. Declare and initialize a numbers array.

// let a = [1,2,3,4,5,];
// alert(a);

// 5. Declare and initialize a boolean array.

// let a = [true, false];
// console.log(a);

// 6. Declare and initialize a mixed array.

// let a = ["zohaib", 21, "zabby450@gmail.com",];
// console.log(a);

// 7. Declare and Initialize an array and store available mobile 
// networks in Pakistan. 

// let a = ["Jazz", "Ufone", "Telenor", "Zong", ];
// console.log(a);

// 8.  Declare and Initialize an array and store available education 
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser 
// like:

// var b = "Qualifications:";
// let a = ["1) SSS<br>", "2) HSC<br>", "3) BCS<br>", "4) BS<br>", "5) BCOM<br>", "6) MS<br>", "7) M.phil<br>", "8) PhD<br>"];
// document.write(b + "<br>", "<br>");  
// document.write(a.join(""));


// 9. Declare and initialize an empty array to store top movies of 
// 2015.  Add movies one by one in an array. Display the elements 
// & length of array in your browser. (Use array’s length method)

// var a = "Top movies of 2015";
// let b = ["1) Avengers: Age of Ultron<br>", "2) Spectre<br>", "3) Jurrasic World<br>", "4) Inside Out<br>", ]
// document.write(a + "<br>", "<br>");
// document.write(b.join("") + "<br>");
// document.write("Length of the array: " + b.length);

// 10. Declare and Initialize an array with your favorite cars. Show  
// a. First index of the array 
// b. Car at first index of the array 
// c.  Last index of the array 
// d. Car at last index of the array 

// var a = "Favourite Cars";
// let b = ["Audi<br>", "Volvo<br>", "Ford<br>", "Lamborghini<br>", ]
// document.write(a + "<br>", "<br>");
// document.write(b.join("") + "<br>");
// document.write("First index of the array: ", b.indexOf(b[0])  + "<br>");
// document.write("Car at the first index of the array: ", b[0] );
// document.write("Last index of the array: ", b.indexOf(b[3])  + "<br>");
// document.write("Car at the last index of the array: ", b[3] );

// 11.  Write a program to store 3 student names in an array. Take 
// another array to store score of these three students. Assume 
// that total marks are 500 for each student, display the scores & 
// percentages of students like: 

// let a = ["Zohaib ", "Umer ", "Ayeza "];
// let b = [320 , 230 , 480];
// document.write("Score of " + a[0] + "is " +  b[0] + ". " + "Percentage:" + b[0]/500*100 + "%"  + "<br>");
// document.write("Score of " + a[1] + "is " +  b[1] + ". " + "Percentage:" + b[1]/500*100 + "%" + "<br>" );
// document.write("Score of " + a[2] + "is " +  b[2] + ". " + "Percentage:" + b[2]/500*100 + "%"  + "<br>");


// 12.  Initialize an array with color names. Display the array 
// elements in your browser. 
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. Display the updated 
// array in your browser. 
// c.  Add two more color to the beginning of the array. Display 
// the updated array in your browser. 
// d. Delete the first color in the array. Display the updated 
// array in your browser. 
// e.  Delete the last color in the array. Display the updated 
// array in your browser. 
// f.  Ask the user at which index he/she wants to add a color & 
// color name. Then add the color to desired position/index. 
// . Display the updated array in your browser. 
// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser.


// 13. Write a program to store student scores in an array & sort 
// the array in ascending order using Array’s sort method. 

// let a = [320, 230, 480, 120];
// document.write("Scores of Students: " + a + "<br>");
// document.write("Ordered Scores of Students: " + a.sort());


// 14. Write a program to sort the below mentioned array: 
// var fruits = [“strawberry”, “apple”, “orange”, “banana”]; 
 
// var fruits = ["strawberry", "apple", "orange", "banana"];
// document.write("Fruits list: " + "<br>" + fruits + "<br>");
// document.write("Ordered fruits list: " + "<br>" + fruits.sort());


// 15. Write a program to initialize an array with city names. Copy 
// 3 array elements from cities array to selectedCities array.  

// let a = ["Karachi ", "Lahore ", "Islamabad ", "Quetta ", "Peshawar "];
// document.write("Cities list: " + "<br>" + a + "<br>" + "<br>");
// let b = a.splice(2)
// document.write("Selected cities list: " + "<br>" + b);


// 16. Write a program to create a single string from the below 
// mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method).

// var arr = ["This ", " is ", " my ", " cat "];
// document.write("Array: " + "<br>" + arr + "<br>" + "<br>");
// document.write("String: " + "<br>" + arr[0] + arr[1] + arr[2] + arr[3]);

// 17.  Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they were 
// stored. (FIFO-First In First Out) 

// let a = ["keyboard", "mouse", "printer", "monitor" + "<br>" + "<br>"];
// document.write("Devices: " + "<br>" + a);
// document.write("Out: " + "<br>" + a[0] + "<br>" + "Out: " + "<br>" + a[1] + "<br>" + "Out: " + "<br>" + a[2] + "<br>" + "Out: " + "<br>" + a[3])


// 18. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In-First 
// Out) 

// let a = ["keyboard", "mouse", "printer", "monitor" + "<br>" ];
// document.write("Devices: " + "<br>" + a + "<br>");
// document.write("Out: " + "<br>" + a[3] + "Out: " + "<br>" + a[2] + "<br>" + "Out: " + "<br>" + a[1] + "<br>" + "Out: " + "<br>" + a[0])


// 19. Write a program to store phone manufacturers (Apple, 
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. Display 
//     the following dropdown/select menu in your browser using 
//     document.write() method: 

// let a = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write (`<select>
// <option>${a[0]}</option>
// <option>${a[1]}</option>
// <option>${a[2]}</option>
// <option>${a[3]}</option>
// <option>${a[4]}</option>
// <option>${a[5]}</option>
// </select>`);


// 20. Declare and initialize an empty multidimensional array.  
// (Array of arrays) 
 
// let a = [[] , [], []];
// document.write(a);

// 21. Declare and initialize a multidimensional array representing 
// the following matrix:  

// var ary = [
//     [0 ,1 ,2 ,3],
//     [1 ,0 ,1 ,2],
//     [2 ,1 ,0 ,1]
// ]
// for(let i = 0; i < ary.length; i++ )
//     document.write(ary[i].join("") + '<br>');




