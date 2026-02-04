// Exercise 1
// Price After Discount
console.log("Exercise 1")
console.log("1) Price After Discount")

function applyDiscount(price, discount) {
    return price-discount
}
console.log(applyDiscount(1000, 200)); // 800
console.log(applyDiscount(500, 50));   // 450
console.log("")
console.log("***************************************")



// Exercise 2
// Student Passed or Failed
console.log("Exercise 2")
console.log("2) Student Passed or Failed")

function checkResult(marks) {
    if (marks >= 50){
        return "Pass"
    }
    else {
        return "Fail"
    }
}
console.log(checkResult(70)); // Pass
console.log(checkResult(40)); // Fail
console.log("")
console.log("***************************************")