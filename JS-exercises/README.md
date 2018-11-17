# Resource for exercises
- https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php


Rest of the questions (for travel):
51. Write a JavaScript program to convert a given number to hours and minutes.
console.log(time_convert(71)); // 1:11
console.log(time_convert(450)); // 7:30
console.log(time_convert(1441)); // 24:1

52. Write a JavaScript program to convert the letters of a given string in alphabetical order.
console.log(alphabet_Soup("Python")); // Phnoty
console.log(alphabet_Soup("Exercises")); // Eceeirssx

53. Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
console.log(ab_Check("Chainsbreak")); // true
console.log(ab_Check("pane borrowed")); // true
console.log(ab_Check("abCheck")); // false

54. Write a JavaScript program to count the number of vowels in a given string.
console.log(vowel_Count("Python")); // 1
console.log(vowel_Count("w3resource.com")); // 5

55. Write a JavaScript program to check if a given string contains equal number of p's and t's present.
console.log(equal_pt("paatpss")); // false
console.log(equal_pt("paatps")); // false

56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
console.log(result_array(80,6)); // ['1','3'] ???

57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
console.log(string_copies("abc", 5)); // abcabcabcabcabc
console.log(string_copies("abc", 0)); // (nothing here)
console.log(string_copies("abc", -2)); // false

58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
console.log(newstring("Python 3.0")); // 3.03.03.03.0
console.log(newstring("JS")); // false
console.log(newstring("JavaScript")); // iptiptiptipt

59. Write a JavaScript program to extract the first half of a string of even length.
console.log(first_half("Python")); // Pyt
console.log(first_half("JavaScript")); // JavaS
console.log(first_half("PHP")); // PHP

60. Write a JavaScript program to create a new string without the first and last character of a given string.
console.log(without_first_end('JavaScript')); // avaScrip
console.log(without_first_end('JS')); //
console.log(without_first_end('PHP')); // H

61. Write a JavaScript program to concatenate two strings except their first character.
console.log(concatenate("PHP","JS")); // HPS
console.log(concatenate("A","B")); //
console.log(concatenate("AA","BB")); // AB

62. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
console.log(right_three("Python")); // honPyt
console.log(right_three("JavaScript")); // iptJavaScr
console.log(right_three("Hi")); // Hi

63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
console.log(middle_three('abcdefg')); // cde
console.log(middle_three('HTML5')); // TML
console.log(middle_three('Python')); // Python
console.log(middle_three('PHP')); // PHP
console.log(middle_three('Exercises')); // rci

64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
console.log(str_con_cat("Python", "JS")); // onJS
console.log(str_con_cat("ab", "cdef")); // abef

65. Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.
console.log(end_script("JavaScript")); // true
console.log(end_script("Java Script")); // true
console.log(end_script("Java Scripts")); // false

66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
console.log(city_name("New York")); // New York
console.log(city_name("Los Angeles")); // Los Angles
console.log(city_name("London")); //

67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
console.log(nop("PythonP")); // ython
console.log(nop("Python")); // ython
console.log(nop("JavaScript")); // JavaScript

68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.
console.log(two_string("JavaScript", 2)); // Japt
console.log(two_string("JavaScript", 3)); // Javipt

69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
console.log(sum_three([10, 32, 20])); // 62
console.log(sum_three([5, 7, 9])); // 21
console.log(sum_three([0, 8, -11])); // -3

70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
console.log(rotate_elements_left([3, 4, 5])); // [4,5,3]
console.log(rotate_elements_left([0, -1, 2])); // [-1,2,0]
console.log(rotate_elements_left([7, 6, 5])); // [6,5,7]

71. Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
console.log(first_last_1([1, 3, 5])); // true
console.log(first_last_1([1, 3, 5, 1])); // true
console.log(first_last_1([2, 4, 6])); // false

72. Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3.
console.log(first_last_same([10, 20, 30])); // false
console.log(first_last_same([10, 20, 30, 10])); // true
console.log(first_last_same([20, 20, 20])); // true

73. Write a JavaScript program to reverse the elements of a given array of integers length 3.
console.log(reverse3([5, 4, 3])); // [3,4,5]
console.log(reverse3([1, 0, -1])); // [-1,0,1]  
console.log(reverse3([2, 3, 1])); // [1,3,2]

74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
console.log(all_max([20, 30, 40])); // [40,40,40]
console.log(all_max([-7, -9, 0])); // [0,0,0]
console.log(all_max([12, 10, 3])); // [12,12,12]

75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
console.log(middle_elements([1, 2, 3], [1, 5, 6])); // [2,5]  
console.log(middle_elements([3, 3, 3], [2, 8, 0])); // [3,8]  
console.log(middle_elements([4, 2, 7], [2, 4, 5])); // [2,4]

76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.
console.log(started([20, 20, 30])); // [20,30]
console.log(started([5, 2, 7, 8])); // [5,8]
console.log(started([17, 12, 34, 78])); // [17,78]

77. Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.
console.log(contins13([1, 5])); // true  
console.log(contins13([2, 3])); // true  
console.log(contins13([7, 5])); // false

78. Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.
console.log(is13([7, 8])); // true
console.log(is13([3, 2])); // false
console.log(is13([0, 1])); // false

79. Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
console.log(twice3040([30, 30])); // true
console.log(twice3040([40, 40])); // true
console.log(twice3040([20, 20])); // false
console.log(twice3040([30])); // false

80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
console.log(swap([1, 2, 3, 4])); // [4,2,3,1]  
console.log(swap([0, 2, 1])); // [1,2,0]  
console.log(swap([3])); // [3]

81. Write a JavaScript program to add two digits of a given positive integer of length two.
console.log(add_two_digits(25)) // 7
console.log(add_two_digits(50)) // 5

82. Write a JavaScript to add two positive integers without carry.
console.log(add_two_int_without_carrying(222, 911)); // 133
console.log(add_two_int_without_carrying(200, 900)); // 100

83. Write a JavaScript to find the longest string from an given array of strings.
console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa'])) // ["aaaaa"]

84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.  Go to the editor
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
console.log(alphabet_char_Shift("abcdxyz")) // bcdeyza


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
