[Resource for all exercises](https://www.w3resource.com/javascript-exercises/)

list to tackle:
```
[] JavaScript Basic [ 150 Exercises with Solution ]
[] JavaScript Fundamental (ES6 version) [ 150 Exercises with Solution ]
[] JavaScript Fundamental (ES6 version) [ 116 Exercises with Solution ]
[] JavaScript Functions [ 29 Exercises with Solution ]
[] JavaScript Recursion [ 9 Exercises with Solution ]
[] JavaScript Conditional Statements and loops [ 12 Exercises with Solution ]
[] JavaScript Array [ 41 Exercises with Solution ]
[] JavaScript Date [ 53 Exercises with Solution ]
[] JavaScript String [ 49 Exercises with Solution ]
[] JavaScript Math [ 53 Exercises with Solution ]
[] JavaScript Validation with Regular expression [ 20 Exercises with Solution ]
[] JavaScript HTML DOM [ 13 Exercises with Solution ]
[] JavaScript Drawing [ 6 Exercises with Solution ]
[] JavaScript Object [ 18 Exercises with Solution ]
[] JavaScript Basic Validation without Regular expression [10 Exercises with Solution ]
[] JavaScript Searching and Sorting Algorithm [14 Exercises with Solution ]
```

questions and example results hardcoded for traveling purposes:


85. Write a JavaScript code to divide an given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.
console.log(alternate_Sums([1, 2, 3, 4, 5, 6])) // [9,12]

86. Write a JavaScript program to find the types of a given angle.  Go to the editor
Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.
console.log(angle_Type(47)); // Acute angle.
console.log(angle_Type(90)); // Right angle.
console.log(angle_Type(145)); // Obtuse angle.
console.log(angle_Type(180)); // Straight angle.

87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
console.log(array_checking([10,20,30], [10,20,30])); true
console.log(array_checking([10,20,30], [30,10,20])); false
console.log(array_checking([10,20,30,40], [10,30,20,40])); true

88. Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.
console.log(checking_numbers(10, 25, 5)); true
console.log(checking_numbers(10, 20, 5)); true
console.log(checking_numbers(10, 20, 4)); false

89. Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.  Go to the editor
For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (\*) to obtain x * y = z
console.log(check_arithmetic_Expression(10, 25, 35)); // true
console.log(check_arithmetic_Expression(10, 25, 250)); // true
console.log(check_arithmetic_Expression(30, 25, 5)); // true
console.log(check_arithmetic_Expression(100, 25, 4.0)); // true
console.log(check_arithmetic_Expression(100, 25, 25)); // false


90. Write a JavaScript program to find the kth greatest element of a given array of integers
console.log(Kth_greatest_in_array([1,2,3,4,5], 3)); // 3
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1)); // 0

91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.
console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2)); // 19
console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3)); // 12
console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2)); // 12

92. Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.
console.log(max_difference([1, 2, 3, 8, 9])); // 5
console.log(max_difference([1, 2, 3, 18, 9])); // 15
console.log(max_difference([13, 2, 3, 8, 9])); // 11

93. Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
console.log(array_max_diff([1, 2, 3, 8, 9])); // 8
console.log(array_max_diff([1, 2, 3, 18, 9])); // 17
console.log(array_max_diff([13, 2, 3, 8, 9])); // 11

94. Write a JavaScript program to find the number which appears most in a given array of integers.
console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9])); // 2

95. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: "+num);
console.log(array_element_replace(num, 2, 5)); // Original Array: 1,2,3,2,2,8,1,9 [1,5,3,5,5,8,1,9]

96. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.
console.log(sum_adjacent_difference([1, 2, 3, 2, -5])); // 10

97. Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.
console.log(build_Palindrome("abcddc")); // abcddcba
console.log(build_Palindrome("122")); // 1221

98. Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case. Go to the editor
Fox example "Write" will be write and "PHp" will be "PHP"
console.log(change_case("Write")); // write
console.log(change_case("PHp")); // PHP


99. Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.
console.log(rearrangement_characters("xyz", "zyx")); true
console.log(rearrangement_characters("xyz", "zyp")); false


100. Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers.
console.log(check_common_element([1,2,3], [3,4,5])); // true   
console.log(check_common_element([1,2,3], [5,6,7])); // false

101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
console.log(test_string('xYr')); // true   
console.log(test_string('XXyx')); // false


102. Write a JavaScript program to find the number of inversions of a given array of integers. Go to the editor
Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
console.log(number_of_InversionsNaive([0, 3, 2, 5, 9])); // 1
console.log(number_of_InversionsNaive([1, 5, 4, 3])); // 3
console.log(number_of_InversionsNaive([10, 30, 20, -10])); // 4


103. Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.
console.log(digit_delete(100)); // 10
console.log(digit_delete(10)); // 1
console.log(digit_delete(1245)); // 245


104. Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.
console.log(different_values([12, 10, 33, 34], 10)); // 2
console.log(different_values([12, 10, 33, 34], 24)); // 24
console.log(different_values([12, 10, 33, 44], 40)); // 34

105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
console.log(digit_to_one(123)); // 1
console.log(digit_to_one(156)); // 2

106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

107. Write a JavaScript program to find the number of sorted pairs formed by its elements of an given array of integers such that one element in the pair is divisible by the other one. Go to the editor
For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
The output of [2, 4, 6] -> 2 - (2,4), (2,6)
The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)


108. Write a JavaScript program to create the dot products of two given 3D vectors. Go to the editor
Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.


109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

111. Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.

112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.

113. Write a JavaScript program to calculate the sum n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.

114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).

115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right). Go to the editor
Example:
[1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false


116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. Go to the editor
For a string "2*0", the output should be : ["210", "240", "270"]


117. Write a JavaScript program to check if a given matrix is an identity matrix. Go to the editor
Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false


118. Write a JavaScript program to check if a given number is in a given range.

119. Write a JavaScript program to check if a given integer has an increasing digits sequence.

120. Write a JavaScript program to check if a point lies strictly inside a given circle. Go to the editor
Input:
Center of the circle (x, y)
Radius of circle: r
Point inside a circle (a, b)


121. Write a JavaScript program to check if a given matrix is lower triangular or not. Go to the editor
Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.


122. Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.

123. Write a JavaScript program to find if the members of an given array of integers is a permutation of numbers from 1 to a given integer.

124. Write a JavaScript program to create the value of NOR of two given booleans. Go to the editor
Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
Sample Example:
For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.


125. Write a JavaScript program to find the longest string from a given array.

126. Write a JavaScript program to get the largest even number from an array of integers.

127. Write a JavaScript program to reverse the order of the bits in a given integer. Go to the editor
56 -> 111000 after reverse 7 -> 111
234 -> 11101010 after reverse 87 -> 1010111


128. Write a JavaScript program to find the smallest round number that is not less than a given value. Go to the editor
Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.


129. Write a JavaScript program to find the smallest prime number strictly greater than a given number.

130. Write a JavaScript program to find the number of even digits in a given integer.

131. Write a JavaScript program to create an array of prefix sums of the given array. Go to the editor
In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
y0 = x0
y1 = x0 + x1
y2 = x0 + x1+ x2
...


132. Write a JavaScript program to find all distinct prime factors of a given integer.

133. Write a JavaScript program to check whether a given fraction is proper or not. Go to the editor
Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.


134. Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

135. Write a JavaScript program to remove all characters from a given string that appear more than once.

136. Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character.

137. Write a JavaScript program to test if a given integer is greater than 15 return the given number, otherwise return 15.

138. Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer.

139. Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.  Go to the editor
Note: A round number is informally considered to be an integer that ends with one or more zeros.


140. Write a JavaScript program to check if all the digits in a given number are the same or not.

141. Write a JavaScript program to find the number of elements which presents in both of the given arrays.

142. Write a JavaScript program to simplify a given absolute path for a file in Unix-style.

143. Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.  Go to the editor
Note: Do not change the order if the lengths of two string are same.


144. Write a JavaScript program to break an address of an url and put it's part into an array.  Go to the editor
Note: url structure : ://.org[/] and there may be no part in the address.


145. Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= an given integer.

146. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

147. Write a JavaScript program to compute the sum of all digits that occur in a given string.

148. Write a JavaScript program to swap two halves of a given array of integers of even length.

149. Write a JavaScript program to change the capitalization of all letters in a given string.

150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
