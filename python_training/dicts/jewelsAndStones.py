class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        count = 0
        jewelsMap = {}
        for i in range(len(jewels)):
            jewelsMap[jewels[i]] = 1
        for i in range(len(stones)):
            if stones[i] in jewelsMap:
                count += 1
        return count
