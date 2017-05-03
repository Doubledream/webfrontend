# leetCode (easy集合)
## 1.Two Sum
### Description:
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
### Example:
	Given nums = [2, 7, 11, 15], target = 9,

	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
### Solution(by **javascript**)
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	var twoSum = function(nums, target) {
		var len = nums.length,
	      result = [];
	  for (var i = 0; i < len; i ++){
	    var other = target - nums[i];
	    var index = nums.indexOf(other);
	    if (index >= 0 && index !== i){
	    	result.push(i, index);
	    	return result;
	    }
	  }
	};
## 2.Reverse Integer
### Description:
Reverse digits of an integer.
### Example:
	Example1: x = 123, return 321
	Example2: x = -123, return -321
### Note:
The input is assumed to be a 32-bit signed integer. Your function should **return 0 when the reversed integer overflows**.
### Solution(by **C++**)
	class Solution {
	public:
	  int reverse(int x) {
	    long long tmp = 0;
	    while(x) {
	      tmp = tmp * 10 + x % 10;
	      x /= 10;
	    }
	    return (tmp < INT_MIN || tmp > INT_MAX) ? 0 : tmp;
	  }
	};
## 3.Palindrome Number
### Description:
Determine whether an integer is a palindrome. Do this **without extra space**.
### Example:
	Example1: x = -1, return false
	Example2: x = 12321, return true
### Solution(by **C++**)
	class Solution {
	public:
		bool isPalindrome(int x) {
		  if (x < 0 || (x != 0 && x % 10 == 0)) return false;
		  int tmp = 0;
		  while (x > tmp) {
		    tmp = tmp * 10 + x % 10;
		    x /= 10;
		  }
		  return x == tmp || x == tmp / 10;
		}
	};
