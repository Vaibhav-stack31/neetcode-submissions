class Solution {
    hasDuplicate(nums) {
        const seen = new Set();
        for (const item of nums){
            if (seen.has(item)){
                return true;
            }
            seen.add(item);
        }
        return false;
    }
}
