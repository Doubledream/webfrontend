# leetCode (easy集合)

## 目录 ##
+ <a href="#Two-Sum" style="text-decoration:none">Two Sum</a>  
+ <a href="#Reverse-Integer" style="text-decoration:none">Reverse Integer</a>  
+ <a href="#Palindrome-Number" style="text-decoration:none">Palindrome Number</a>  
+ <a href="#Roman-to-Integer" style="text-decoration:none">Roman to Integer</a>  
+ <a href="#Merge-Two-Sorted-Lists" style="text-decoration:none">Merge Two Sorted Lists</a>  
+ <a href="#Longest-Common-Prefix" style="text-decoration:none">Longest Common Prefix</a>  
+ <a href="#Valid-Parentheses" style="text-decoration:none">Valid Parentheses</a>  

## 1.Two Sum <a name="Two-Sum"/>
### Description:
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
### Example:
	Given nums = [2, 7, 11, 15], target = 9,

	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
### Solution (by **javascript**)
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

## 2.Reverse Integer <a name="Reverse-Integer"/>
### Description:
Reverse digits of an integer.
### Example:
	Example1: x = 123, return 321
	Example2: x = -123, return -321
### Note:
The input is assumed to be a 32-bit signed integer. Your function should **return 0 when the reversed integer overflows**.
### Solution (by **C++**)
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

## 3.Palindrome Number <a name="Palindrome-Number"/>
### Description:
Determine whether an integer is a palindrome. Do this **without extra space**.
### Example:
	Example1: x = -1, return false
	Example2: x = 12321, return true
### Solution (by **C++**)
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

## 4.Roman to Integer ##<a name="Roman-to-Integer"/>
### Description:
Given a roman numeral, convert it to an integer.  
Input is guaranteed to be within the range from 1 to 3999.
### Solution (by **javascript**)
	/**
	 * @param {string} s
	 * @return {number}
	 */
	var romanToInt = function(s) {
	    var list = {
	        'I': 1,
	        'V': 5,
	        'X': 10,
	        'L': 50,
	        'C': 100,
	        'D': 500,
	        'M': 1000
	    };
	    var n = s.length;
	    var ss = s.concat(s[n-1]);
	    var res = 0;
	    for (var i = 0; i < n; i++){
	        if (list[ss[i]] >= list[ss[i+1]]) {
	            res += list[ss[i]];
	        } else {
	            res -= list[ss[i]];
	        }
	    }
	    return res;
	};

## 5.Merge Two Sorted Lists <a name="Merge-Two-Sorted-Lists"/>
### Description:
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
### Solution (by **C++**)
	/**
	 * Definition for singly-linked list.
	 * struct ListNode {
	 *     int val;
	 *     ListNode *next;
	 *     ListNode(int x) : val(x), next(NULL) {}
	 * };
	 */
	class Solution {
	public:
	    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
	        if (l1 == NULL)
	            return l2;
	        else if (l2 == NULL)
	            return l1;
	        ListNode* ml = NULL;
	        if (l1->val < l2->val) {
	            ml = l1;
	            ml->next = mergeTwoLists(l1->next, l2);
	        } else {
	            ml = l2;
	            ml->next = mergeTwoLists(l1, l2->next);
	        }
	        return ml;
	    }
	};

## 6.Longest Common Prefix <a name="Longest-Common-Prefix"/>
### Description:
Write a function to find the longest common prefix string amongst an array of strings.
### Solution (by **C++**)
	class Solution {
	public:
	    string longestCommonPrefix(vector<string>& strs) {
	        string prefix = "";
	        for(int idx=0; strs.size()>0; prefix+=strs[0][idx], idx++)
	            for(int i=0; i<strs.size(); i++)
	                if(idx >= strs[i].size() ||(i > 0 && strs[i][idx] != strs[i-1][idx]))
	                    return prefix;
	        return prefix;
	    }
	};

## 7.Valid Parentheses <a name="Valid-Parentheses"/>
### Description:
Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
### Example:
Example1: `'()'` and `'()[]{}'`, return true  
Example2: `'(]'` and `'([)]'`, return false
### Solution (by **C++**)
	class Solution {
	public:
	    bool isValid(string s) {
	        stack<char> sta;
	        for (char& c : s) {
	            switch (c) {
	                case '(':
	                case '[':
	                case '{': sta.push(c); break;
	                case ')': if (sta.empty() || sta.top()!='(') return false; else sta.pop(); break;
	                case ']': if (sta.empty() || sta.top()!='[') return false; else sta.pop(); break;
	                case '}': if (sta.empty() || sta.top()!='{') return false; else sta.pop(); break;
	            }
	        }
	        return sta.empty();
	    }
	};