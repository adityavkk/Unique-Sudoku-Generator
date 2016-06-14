var easyPuzz = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
var medPuzz = [
  [6, 4, 8, 0, 1, 7, 0, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 4],
  [7, 3, 0, 6, 4, 0, 0, 9, 0],
  [1, 0, 0, 0, 7, 0, 5, 0, 0],
  [0, 0, 0, 1, 0, 8, 0, 0, 0],
  [0, 0, 4, 0, 2, 0, 0, 0, 8],
  [0, 6, 0, 0, 9, 3, 0, 8, 5],
  [3, 0, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 0, 2, 6, 0, 9, 1, 3]
];
var hardPuzz = [
  [0, 0, 0, 5, 0, 0, 0, 0, 0],
  [8, 0, 7, 1, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 6, 3],
  [0, 2, 0, 8, 0, 0, 4, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 7],
  [0, 0, 5, 0, 0, 3, 0, 1, 0],
  [5, 4, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 4, 0, 7, 8, 0, 2],
  [0, 0, 0, 0, 0, 5, 0, 0, 0]
];
var unsolvablePuzz = [
  [6, 4, 8, 0, 1, 7, 0, 3, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 4],
  [7, 3, 0, 6, 4, 0, 0, 9, 0],
  [1, 0, 0, 0, 7, 0, 5, 0, 0],
  [0, 0, 0, 1, 0, 8, 0, 0, 0],
  [0, 0, 4, 0, 2, 0, 0, 0, 8],
  [0, 6, 0, 0, 9, 3, 0, 8, 5],
  [3, 0, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 0, 2, 6, 0, 9, 1, 3]
];
var puzzleSolved = [
  [8, 1, 2, 7, 5, 3, 6, 4, 9],
  [9, 4, 3, 6, 8, 2, 1, 7, 5],
  [6, 7, 5, 4, 9, 1, 2, 8, 3],
  [1, 5, 4, 2, 3, 7, 8, 9, 6],
  [3, 6, 9, 8, 4, 5, 7, 2, 1],
  [2, 8, 7, 1, 6, 9, 5, 3, 4],
  [5, 2, 1, 9, 7, 4, 3, 6, 8],
  [4, 3, 8, 5, 2, 6, 9, 1, 7],
  [7, 9, 6, 3, 1, 8, 4, 5, 2]
];

var nonUniquePuzz = [
  [3, 6, 7, 0, 0, 5, 2, 8, 9],
  [4, 0, 2, 0, 0, 0, 0, 6, 0],
  [0, 0, 0, 7, 0, 0, 3, 0, 0],
  [2, 0, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 4, 7],
  [0, 0, 4, 0, 0, 3, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 7, 1],
  [7, 0, 0, 0, 6, 0, 9, 0, 0],
  [0, 0, 0, 9, 5, 7, 0, 0, 2]
];

describe('Sudoku Solver', function() {

  it('should solve an easy puzzle', function() {
    expect(sudoku(easyPuzz).toString()).toEqual([
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ].toString());
  });
  it('should solve a medium puzzle', function() {
    expect(sudoku(medPuzz).toString()).toEqual([
      [6, 4, 8, 9, 1, 7, 3, 5, 2],
      [2, 1, 9, 3, 8, 5, 7, 6, 4],
      [7, 3, 5, 6, 4, 2, 8, 9, 1],
      [1, 8, 3, 4, 7, 9, 5, 2, 6],
      [5, 2, 6, 1, 3, 8, 4, 7, 9],
      [9, 7, 4, 5, 2, 6, 1, 3, 8],
      [4, 6, 1, 7, 9, 3, 2, 8, 5],
      [3, 9, 2, 8, 5, 1, 6, 4, 7],
      [8, 5, 7, 2, 6, 4, 9, 1, 3]
    ].toString());
  });
  it('should solve a very hard puzzle', function() {
    expect(sudoku(hardPuzz).toString()).toEqual([
      [3, 9, 4, 5, 7, 6, 1, 2, 8],
      [8, 6, 7, 1, 3, 2, 5, 9, 4],
      [2, 5, 1, 9, 4, 8, 7, 6, 3],
      [7, 2, 6, 8, 9, 1, 4, 3, 5],
      [9, 1, 3, 6, 5, 4, 2, 8, 7],
      [4, 8, 5, 7, 2, 3, 6, 1, 9],
      [5, 4, 8, 2, 1, 9, 3, 7, 6],
      [1, 3, 9, 4, 6, 7, 8, 5, 2],
      [6, 7, 2, 3, 8, 5, 9, 4, 1]
    ].toString());
  });
  it('should solve the same very hard puzzle with a random solveArray', function() {
    expect(solve(false, shuffleArray(stdSolveArray), hardPuzz).toString()).toEqual([
      [3, 9, 4, 5, 7, 6, 1, 2, 8],
      [8, 6, 7, 1, 3, 2, 5, 9, 4],
      [2, 5, 1, 9, 4, 8, 7, 6, 3],
      [7, 2, 6, 8, 9, 1, 4, 3, 5],
      [9, 1, 3, 6, 5, 4, 2, 8, 7],
      [4, 8, 5, 7, 2, 3, 6, 1, 9],
      [5, 4, 8, 2, 1, 9, 3, 7, 6],
      [1, 3, 9, 4, 6, 7, 8, 5, 2],
      [6, 7, 2, 3, 8, 5, 9, 4, 1]
    ].toString());
  });
  it('should return false for an unsolvable puzzle', function() {
    expect(sudoku(unsolvablePuzz)).toEqual(false);
  });

});

describe('Unique Sudoku Generator', function() {
  var easyPuzz =
    it('emptyPuzzleGenerator should generate an empty sudoku puzzle', function() {
      expect(emptyPuzzleGenerator().toString()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ].toString());
    });
  it('emptyCellCoordinatesGen should return an array of coordinates [i, j] in the puzzle that are empty', function() {
    expect(emptyCellCoordinatesGen(medPuzz).toString()).toEqual([
      [0, 3],
      [0, 6],
      [0, 7],
      [0, 8],
      [1, 0],
      [1, 1],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
      [2, 2],
      [2, 5],
      [2, 6],
      [2, 8],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 5],
      [3, 7],
      [3, 8],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 4],
      [4, 6],
      [4, 7],
      [4, 8],
      [5, 0],
      [5, 1],
      [5, 3],
      [5, 5],
      [5, 6],
      [5, 7],
      [6, 0],
      [6, 2],
      [6, 3],
      [6, 6],
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 7],
      [7, 8],
      [8, 0],
      [8, 1],
      [8, 2],
      [8, 5]
    ].toString());
  });
  it('isUnique should return true if puzzles are unique', function() {
    expect(isUnique(medPuzz)).toEqual(true);
    expect(isUnique(hardPuzz)).toEqual(true);
  });
  it('isUnique should return false if puzzles are not unique or unsolvable', function() {
    expect(isUnique(nonUniquePuzz)).toEqual(false);
  });
  it('should be able to generate random unique puzzles', function() {
    var uniquePuzz1 = uniquePuzzleGen();
    expect(isUnique(uniquePuzz1)).toEqual(true);
  });
  it('should be able to generate unique puzzles from a start puzzle', function() {
    expect(isUnique(uniquePuzzleGen(puzzleSolved))).toEqual(true);
  });
});
