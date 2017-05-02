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