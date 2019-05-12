class Solution(object):
    def isPalindrome(self, x):
        num = 0
        if x < 0:
            return False
        while x > num:
            u = x % 10
            x = x / 10
            num = num * 10 + u
        return (x == num) or (x == num / 10)


c = Solution()
c.isPalindrome(12321)
