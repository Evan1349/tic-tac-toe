function CalculateWinner(squares, size) {
    // 假設 X值=1, O值=-1 若加總為3或-3條件達成，產生winner
    // Init
    const rowSums = Array(size).fill(0);
    const colSums = Array(size).fill(0);
    let diagSum = 0;
    let antiDiagSum = 0;
  
    // Sums checked
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const value = squares[i * size + j] === 'X' ? 1 : squares[i * size + j] === 'O' ? -1 : 0;

        // row & column 
        rowSums[i] += value;
        colSums[j] += value;
  
        // diag & anti  
        if (i === j) {
          diagSum += value;
        }
        if (i + j === size - 1) {
          antiDiagSum += value;
        }
      }
    }
  
    // find winner
    for (let i = 0; i < size; i++) {
      if (rowSums[i] === size || colSums[i] === size || diagSum === size || antiDiagSum === size) {
        return 'X';
      }
      if (rowSums[i] === -size || colSums[i] === -size || diagSum === -size || antiDiagSum === -size) {
        return 'O';
      }
    }
  
    return null;
  }
  
  export default CalculateWinner;
  