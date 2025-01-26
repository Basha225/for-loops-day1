//1.	Print Numbers
//    Write a for loop to print numbers from 1 to 10 in the console.
console.log("Numbers from 1 to 10")
var num = +prompt("Enter Starting Number");
for (var i = num; i<=10; i++){
    console.log(i);
}



//2.	Sum of Numbers
//    Write a for loop to calculate the sum of the first 5 natural numbers (1, 2, 3, 4, 5) and display the result.


console.log("Sum of First 5 Natural Numbers");
var num2 = +prompt("Enter Starting Number");
var sum =0;
for(var j=num2; j<=5; j++){
        sum = sum+j;
}
console.log("sum of 5 natural numbers ",sum)
document.write("sum of 5 natural numbers ",sum);


//3.	Even Numbers
//Write a for loop to print all even numbers between 1 and 20.
console.log("Even Numbers between 1 to 20");
var num3 = +prompt("Enter Starting Number");
for (var i=num3; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}

// 4.	Reverse Counting
// Write a for loop to print numbers from 10 to 1 in descending order.
console.log("Reverse Counting");
var num4 = +prompt("Enter Ending Number");
for (var i =num4; i>=1; i--){
    console.log(i);
}


//5.	Multiplication Table
//Write a for loop to print the multiplication table of 5 (from 5 × 1 to 5 × 10).
console.log("Multiplication Table");
var multi = 5;
var num5 = +prompt("Enter  Number");
for (var i =num5; i<=10; i++){
    console.log("5 * ",i,"=",multi*i)
}



console.log("For loop MCQS");


 
    
    
    //  1.	What is the starting point of a basic for loop in JavaScript?
    // –	
    // A)	for (let i = 1; i < 10; i++)
    // –	
    // B)	for (let i = 0; i < 10; i++)
    // –	
    // C)	for (let i = 0; i <= 10; i++)
    // –	
    // D)	for (let i = 1; i <= 10; i++)

    // Answer : B


    //     2.	What part of the for loop controls how many times the loop executes?
    // –	
    // A)	Initialization
    // –	
    // B)	Condition
    // –	
    // C)	Increment/Decrement
    // –	
    // D)	All of the above
    
    // Answer : B


    //     3.	What will be the output of the loop?
    //  	for (let i = 0; i < 5; i++) {
    //   console.log(i);
    // }
    // –	
    // A)	0, 1, 2, 3, 4
    // –	
    // B)	1, 2, 3, 4, 5
    // –	
    // C)	1, 2, 3, 4
    // –	
    // D)	0, 1, 2, 3, 4, 5

    // Answer : A

    //     4.	Can a for loop be used without a condition?
    // –	
    // A)	Yes
    // –	
    // B)	No

    // Answer : B

    //     5.	What is the significance of the increment part of the for loop?
    // –	
    // A)	It checks the condition.
    // –	
    // B)	It initializes the loop.
    // –	
    // C)	It changes the loop variable each iteration.
    // –	
    // D)	It ends the loop.

    // Answer : C

    //     6.	What will be the output of the following code?
    //  	for (let i = 5; i > 0; i--) {
    //   console.log(i);
    // }
    // –	
    // A)	5, 4, 3, 2, 1
    // –	
    // B)	1, 2, 3, 4, 5
    // –	
    // C)	4, 3, 2, 1
    // –	
    // D)	5, 4, 3, 2, 1, 0

    // Answer : A


    //     7.	Can the loop variable be modified inside the for loop body?
    // –	
    // A)	Yes
    // –	
    // B)	No

    // Answer : A


    //     8.	What happens if the condition in the for loop is always true?
    // –	
    // A)	Loop runs indefinitely.
    // –	
    // B)	Loop will never run.
    // –	
    // C)	Loop runs once.
    // –	
    // D)	Loop exits immediately.

    // Answer : A


    //     9.	What does the loop do?
    //  	for (let i = 3; i < 10; i += 2) {
    //   console.log(i);
    // }
    // –	
    // A)	3, 5, 7, 9
    // –	
    // B)	4, 6, 8, 10
    // –	
    // C)	5, 7, 9
    // –	
    // D)	3, 4, 5, 6

    // Answer : A


    //     10.	What will happen in this code?
    //  	for (let i = 0; i < 3; i++) {
    //   let i = 5;
    //   console.log(i);
    // }
    // –	
    // A)	0, 1, 2
    // –	
    // B)	5, 5, 5
    // –	
    // C)	Error
    // –	
    // D)	Infinite loop

    // Answer : A


    //     11.	What is the scope of the variable i in a for loop?
    // –	
    // A)	Global
    // –	
    // B)	Local to the block
    // –	
    // C)	Local to the function
    // –	
    // D)	None

    // Answer : B



    //     12.	Which of the following is a valid for loop?
    // –	
    // A)	for (let i = 0;; i++)
    // –	
    // B)	for (let i = 0, i < 5, i++)
    // –	
    // C)	for (i = 0; i < 5; i++)
    // –	
    // D)	for (i == 0; i < 5; i++)


    // Answer : A


    //     13.	How can you skip the current iteration in a for loop?
    // –	
    // A)	continue;
    // –	
    // B)	break;
    // –	
    // C)	return;
    // –	
    // D)	exit;

    // Answer : A



    //     14.	How can you stop the execution of a for loop before it completes all iterations?
    // –	
    // A)	continue;
    // –	
    // B)	stop;
    // –	
    // C)	break;
    // –	
    // D)	exit;

    // Answer : C


    //     15.	What happens if the increment is missing in the for loop?
    // –	
    // A)	Infinite loop
    // –	
    // B)	Syntax error
    // –	
    // C)	Loop runs once
    // –	
    // D)	No iteration occurs

    // Answer : C

    
    // 16.	What will be the output?
    //  	for (let i = 0; i < 5; i += 2) {
    //   console.log(i);
    // }
    // –	
    // A)	0, 1, 2, 3, 4
    // –	
    // B)	0, 2, 4
    // –	
    // C)	0, 2
    // –	
    // D)	2, 4

    // Answer : B

    
    // 17.	What will happen?
    //  	for (let i = 0; i < 3; i++)
    //   for (let j = 0; j < 2; j++)
    //     console.log(i + j);
    // –	
    // A)	0, 1, 1, 2, 2, 3
    // –	
    // B)	0, 1, 1, 2, 2, 3, 3
    // –	
    // C)	0, 1, 1, 2, 2, 3, 3, 4
    // –	
    // D)	0, 1, 2, 3, 4

    // Answer : A


    // 18.	What will the following loop output?
    //  	for (let i = 0; i <= 10; i++) {
    //   if (i === 5) break;
    //   console.log(i);
    // }
    // –	
    // A)	0, 1, 2, 3, 4
    // –	
    // B)	0, 1, 2, 3, 4, 5
    // –	
    // C)	0, 1, 2, 3, 4, 5, 6
    // –	
    // D)	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    // Answer : A


    // 19.	What will the following code do?
    //  	for (let i = 1; i <= 10; i *= 2) {
    //   console.log(i);
    // }
    // –	
    // A)	1, 2, 4, 8
    // –	
    // B)	1, 3, 5, 7, 9
    // –	
    // C)	2, 4, 8
    // –	
    // D)	1, 2, 3, 4

    // Answer : A


    // 20.	What will this for loop do?
    //  	for (let i = 10; i >= 0; i -= 3) {
    //   console.log(i);
    // }
    // –	
    // A)	10, 7, 4, 1
    // –	
    // B)	10, 8, 6, 4
    // –	
    // C)	10, 9, 8, 7
    // –	
    // D)	Error

    // Answer : 
