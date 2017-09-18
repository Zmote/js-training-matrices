/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */

"use strict";

function execute(sourceMatrix, targetMatrix, operation) {
    var newMatrix = [];
    for (var i = 0; i < sourceMatrix.length; i++) {
        newMatrix.push([]);
        for (var j = 0; j < sourceMatrix[i].length; j++) {
            newMatrix[i].push(operation(sourceMatrix[i][j], targetMatrix[i][j]));
        }
    }
    return newMatrix;
}

function add(source, target) {
    return source + target;
}

function subtract(source, target) {
    return source - target;
}

Array.prototype.add = function (mx) {
    return execute(this, mx, add);
};

Array.prototype.substract = function(mx) {
    return execute(this, mx, subtract);
};

// First iteration
// Array.prototype.multiply = function (mx) {
//     var firstMatrix = [[],[],[]];
//     var i = 0;
//     var j = 0;
//     for(i = 0; i < this.length; i++){
//         for(j = 0; j < this[i].length; j++){
//             // firstMatrix[i].push(this[i][0]*mx[0][j]);
//             firstMatrix[i].push("a" + i + "0 * " + "b" + 0 + j);
//         }
//     }
//     console.log(firstMatrix);
//     var secondMatrix = [[],[],[]];
//     for(i = 0; i < this.length; i++){
//         for(j = 0; j < this[i].length; j++){
//             // secondMatrix[i].push(this[i][1]*mx[1][j]);
//             secondMatrix[i].push("a" + i + "1" + "*" + "b1" + j)
//         }
//     }
//     console.log(secondMatrix);
//     var thirdMatrix = [[],[],[]];
//     for(i = 0; i < this.length; i++){
//         for(j = 0; j < this[i].length; j++){
//             // thirdMatrix[i].push(this[i][2]*mx[2][j]);
//             thirdMatrix[i].push("a" + i + "2 * " + "b" + "2" + j);
//         }
//     }
//     console.log(thirdMatrix);
//     return firstMatrix.add(secondMatrix).add(thirdMatrix);
// };

//Second iteration: This iteration summarizes a lot, but has a lot of static parts as well
// Array.prototype.multiply = function (mx) {
//     var product = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
//
//     for (var h = 0; h < this.length; h++) {
//         var partialMatrix = [[], [], []];
//         for (var i = 0; i < this.length; i++) {
//             for (var j = 0; j < this[i].length; j++) {
//                 partialMatrix[i].push(this[i][h] * mx[h][j]);
//             }
//         }
//         product = product.add(partialMatrix);
//     }
//     return product;
// };

//third iteration: This iteration has a more dynamic code (dynamic lenghts etc.) + every function does something specific
//which helps to keep overview over the parts of the code
// function partialSum(product, partialMatrix) {
//     if (product !== null) {
//         product = product.add(partialMatrix);
//     } else {
//         product = partialMatrix;
//     }
//     return product;
// }
//
// function calculateColumns(i, partialMatrix, h, mx) {
//     for (var j = 0; j < this[i].length; j++) {
//         partialMatrix[i].push(this[i][h] * mx[h][j]);
//     }
//     return j;
// }
// function calculateRows(partialMatrix, h, mx) {
//     for (var i = 0; i < this.length; i++) {
//         partialMatrix.push([]);
//         calculateColumns.call(this, i, partialMatrix, h, mx);
//     }
//     return i;
// }
//
// function summarizePartialProducts(mx, product) {
//     for (var h = 0; h < this.length; h++) {
//         var partialMatrix = [];
//         calculateRows.call(this, partialMatrix, h, mx);
//         product = partialSum(product, partialMatrix);
//     }
//     return product;
// }
//
// Array.prototype.multiply = function (mx) {
//     return summarizePartialProducts.call(this, mx, null);
// };

//Fourth iteration: We keep optimizing, make the code more readable, optimize routines where we can
function partialSum(product, partialMatrix) {
    return product !== null ? product.add(partialMatrix) : partialMatrix;
}
function calculateColumns(row, partialMatrix, dimension, mx) {
    partialMatrix.push([]);
    for (var col = 0; col < this[row].length; col++) {
        partialMatrix[row].push(this[row][dimension] * mx[dimension][col]);
    }
}
function calculateRows(partialMatrix, dimension, mx) {
    for (var row = 0; row < this.length; row++) {
        calculateColumns.call(this, row, partialMatrix, dimension, mx);
    }
    return partialMatrix;
}
function summarizePartialProducts(mx) {
    var product = null;
    for (var dimension = 0; dimension < this.length; dimension++) {
        product = partialSum(product, calculateRows.call(this, [], dimension, mx));
    }
    return product;
}

//Fith iteration: What could be next? For example, refactoring all the helper codes into own file!
//That's basically the spirit, how do we make the code simpler, more manageable, more performant etc.
//Always think about the cycle
// 1) Solve the problem as fast as possible,
// 2) Refactor your code (rename variables, extract to functions etc.),
// 3)optimize performance
// 4) Start over

Array.prototype.multiply = function (mx) {
    return summarizePartialProducts.call(this, mx);
};

Array.prototype.display = function () {
    console.log(this);
};