/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) 
{
    arr=new Array();
    arr[0]=nums[0];
    for(var i=0; i<nums.length-1; i++)
        {
            arr[i+1]=arr[i]+nums[i+1];
        }
    return arr;
};
