/*Given a square matrix of size nXn, calculate the absolute difference between the sums of its diagonals.

Input Format

The first line contains a single integer,n . The next n lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:
11
      5
            -12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:
            4
      5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15*/

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    console.log(Math.abs( Diagsum ("lead", n, a ) - Diagsum("other", n, a)))
}

function Diagsum(type, n, input_array) {
    var sum = 0;

    if( type == "lead") {
        for(var i=0; i<n; i++) {
            sum+= input_array[i][i]
        }
    }

    else {
        for(var i=0; i<n; i++) {
            sum+= input_array[i][n - i-1]
        }
    }

    return sum;
}
