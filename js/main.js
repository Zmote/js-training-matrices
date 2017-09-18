/**
 * main.js is the entry point to your program.
 * You find the program logic, data structures and function calls in this file
 */

"use strict";

let matrix1 =
    [
        [1, 2, 3],
        [0, 0, 5],
        [4, 2, -1]
    ];

let matrix2 =
    [
        [-2, 3, 0],
        [0, -1, 0],
        [1, 5, -1]
    ];

let matrix3 =
    [
        [1, 2, 3,4],
        [0, 0, 5,6],
        [4, 2, -1,6],
        [3, 2, -4,6]
    ];

let matrix4 =
    [
        [-2, 3, 0,1],
        [0, -1, 0,3],
        [1, 5, -1,4],
        [1, 3, 4,-4]
    ];

let matrix5 =
    [
        [1, 2, 3,4, 6],
        [0, 0, 5,6, 3],
        [4, 2, -1,6, 4],
        [3, 2, -4,6, -3],
        [3, 2, -4,6, -3]
    ];

let matrix6 =
    [
        [-2, 3, 0,1,10],
        [0, -1, 0,3,-3],
        [1, 5, -1,4,7],
        [1, 3, 4,-4,10],
        [1, 3, 4,-4,10,11]
    ];

// 01: add and display
matrix1.add(matrix2).display();

// 02: substract and display
matrix1.substract(matrix2).display();

// 03: multiply and display, 3x3 matrices
matrix1.multiply(matrix2).display();

//04: 4x4 matrices
matrix3.multiply(matrix4).display();

//05: 5x5 matrices
matrix5.multiply(matrix6).display();