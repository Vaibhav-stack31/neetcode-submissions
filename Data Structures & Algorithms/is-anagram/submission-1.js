class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // First level filtering, is s and t has unequal length, it's obvious they aren't anagram
        if (s.length !== t.length){
            return false;
        }

        // create a hashmap
        const count = new Map();

        // Iterating through each letter in s variable and storing them as key and number of times
        // they appear as value while increasing the count of value
        for (const char of s){
            count.set(char, (count.get(char) || 0 ) + 1);
        }

        // Iterating through each element in t variable and reducing the value each time the letter
        // is encountered 
        for (const char of t){
            // First level filtering, returning false if the character isn't in map
            if (!count.has(char)){
                return false;
            }

            count.set(char, (count.get(char)) - 1);

            if (count.get(char) < 0){
                return false;
            }
        }
        return true;
    }
}
