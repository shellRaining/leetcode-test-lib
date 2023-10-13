// this is a typescript module, which used to define a tree class, and its methods

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  static fromArray(arr: number[]): TreeNode | null {
    if (arr.length == 0) return null;
    const root = new TreeNode(arr[0], null, null);
    const queue: TreeNode[] = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
      const node = queue.shift()!;

      if (arr[i] !== null) {
        node.left = new TreeNode(arr[i], null, null);
        queue.push(node.left);
      }
      i++;

      if (i >= arr.length) break;

      if (arr[i] !== null) {
        node.right = new TreeNode(arr[i], null, null);
        queue.push(node.right);
      }

      i++;
    }

    return root;
  }

  print(): void {
    const height = this.getHeight(this);
    const width = Math.pow(2, height) - 1;

    const treeArray: (string | null)[][] = [];

    for (let i = 0; i < height; i++) {
      treeArray[i] = new Array(width).fill(null);
    }

    this.fillTreeArray(treeArray, this, 0, 0, width - 1);

    for (let i = 0; i < height; i++) {
      console.log(treeArray[i].join(" "));
    }
  }

  private getHeight(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  private fillTreeArray(
    treeArray: (string | null)[][],
    node: TreeNode | null,
    level: number,
    start: number,
    end: number,
  ): void {
    if (node === null) {
      return;
    }

    const mid = Math.floor((start + end) / 2);
    treeArray[level][mid] = node.val.toString();

    this.fillTreeArray(treeArray, node.left, level + 1, start, mid - 1);
    this.fillTreeArray(treeArray, node.right, level + 1, mid + 1, end);
  }
}
export default TreeNode;
export { TreeNode };
