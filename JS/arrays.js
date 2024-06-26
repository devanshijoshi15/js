// let marks= [98, 99, 95, 96];
// console.log(marks);
// console.log(marks.length); 
// console.log(marks[3]) //index
// console.log(marks[0]= 100); //to change the val index
// let str = "hello";
// console.log(str[0] ="y")

// //loops
// //for loop
// let fruits = ["apple", "banana", "orange", "mango", "watermelon", "kiwi"]
// // for(let idx = 0; idx<fruits.length; idx++){
// //     console.log(fruits[idx]);
// // }

// //for of loop
// for(let elements of fruits){
//     console.log(elements);
// }

// let marks =[85, 97, 44, 37, 76, 60];
// let sum =0;
// for (let val of marks){
//     sum += val;
// }
// console.log(sum);
// let avg = sum / marks.length;
// console.log("avg marks of class = ", avg);

// let items = [250, 645, 300, 900, 50];
// //to track index
// let i = 0
// for (let val of items){
//     console.log("val at index" , i, "= ",  val);
//     //console.log(`val at index ${i} = ${val}`);
//     let offer = val/10;
//     items [i] = items[i] - offer;
//     console.log(`value after offer =${items[ i]}`);
//     i++;
// }

//push()  pop() toSting() method
// let foodItems = ["potato", "tomato", "litchi"];
// foodItems.push("chips", "burger", "pizza")
// console.log(foodItems)
// foodItems.pop();
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log("deleted item = ", deletedItem);
// console.log(foodItems);
// console.log(foodItems.toString());

// let marks=[97,98,99];
// console.log(marks);
// console.log(marks.toString());

//concat() unshift() shift()
// let marvel_heroes = ["thor", "spiderman", "ironman"];
// let dc_heroes = ["superman", "batman"];
// let heroes = marvel_heroes.concat(dc_heroes);
// console.log(heroes);
// marvel_heroes.unshift("antman");
// console.log(marvel_heroes);
// let val = marvel_heroes.shift();
// console.log("deleted val = ", val);
// console.log(marvel_heroes.toString())

//slice() splice()
// let marvel_heroes = ["thor", "spiderman", "ironman", "dr.strange"];
// console.log(marvel_heroes);
// console.log(marvel_heroes.slice(1 ,4));
// console.log(marvel_heroes.slice(0 ,2,4));
// console.log(marvel_heroes.slice(1));
// console.log(marvel_heroes.slice());

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2, 101,101)
// console.log(arr);

//add element
// arr.splice(2,0,101);
// console.log(arr);

//delete element
// arr.splice(3, 1)
// console.log(arr)

//replace element
// arr.splice(3,1,100);
// console.log(arr)
// arr.splice(4)
// console.log(arr);
// arr.splice()
// console.log(arr);

// let comp = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
// console.log(comp);
// // comp.splice(0,1);
// comp.shift()
// console.log(comp);
// comp.splice(1,1, "OLA");
// console.log(comp);
// comp.push("amazon");
// console.log(comp);

// let items = [250, 645, 300, 900, 50];

// let j =0;
// for (let i of items){
//     let updatedprice = i -((i*10)/100);
//     items[j] = updatedprice;
//     j++;
// }
// console.log(items)