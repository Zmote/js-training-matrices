/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Test your own functions with edge cases', () => {

    it('a function.', function(){
        let result = 1;
        result.should.not.be.equal(2);
    });

it("Test Matrix Addition", function () {
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
    let expectedResult = [
        [-1, 5, 3],
        [0, -1, 5],
        [5, 7, -2]
    ];

    let resultMatrix = matrix1.add(matrix2);

    expectedResult.toString().should.be.equal(resultMatrix.toString());

});

});
