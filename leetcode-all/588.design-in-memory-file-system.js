/*
 * @lc app=leetcode id=588 lang=javascript
 *
 * [588] Design In-Memory File System
 *
 * https://leetcode.com/problems/design-in-memory-file-system/description/
 *
 * algorithms
 * Hard (41.30%)
 * Total Accepted:    7.5K
 * Total Submissions: 18.1K
 * Testcase Example:  '["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]\n[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]'
 *
 * Design an in-memory file system to simulate the following functions:
 * 
 * ls: Given a path in string format. If it is a file path, return a list that
 * only contains this file's name. If it is a directory path, return the list
 * of file and directory names in this directory. Your output (file and
 * directory names together) should in lexicographic order.
 * 
 * mkdir: Given a directory path that does not exist, you should make a new
 * directory according to the path. If the middle directories in the path don't
 * exist either, you should create them as well. This function has void return
 * type.
 * 
 * addContentToFile: Given a file path and file content in string format. If
 * the file doesn't exist, you need to create that file containing given
 * content. If the file already exists, you need to append given content to
 * original content. This function has void return type.
 * 
 * readContentFromFile: Given a file path, return its content in string
 * format.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: 
 * ["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
 * [[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]
 * 
 * Output:
 * [null,[],null,null,["a"],"hello"]
 * 
 * Explanation:
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * You can assume all file or directory paths are absolute paths which begin
 * with / and do not end with / except that the path is just "/".
 * You can assume that all operations will be passed valid parameters and users
 * will not attempt to retrieve file content or list a directory or file that
 * does not exist.
 * You can assume that all directory names and file names only contain
 * lower-case letters, and same names won't exist in the same directory.
 * 
 * 
 */

var FileSystem = function() {
    
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
    
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
    
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
    
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
    
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */
