/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// Traverse tree with DFS starting on root
// if node has children append the value to path string
// Store complete path when a leaf is finded
// Return an strings array of all root to leaf paths

var binaryTreePaths = function (root) {
    let result = [];

    const dfs = (node, path) => {
        if (!node) return;

        path += node.val;

        if (!node.left && !node.right) {
            result.push(path);
        } else {
            path += "->";
            dfs(node.left, path);
            dfs(node.right, path);
        }
    };

    dfs(root, "")

    return result
};