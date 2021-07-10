/**
 * わからなかったのでカンニング
 * カンニングさせていただいた回答: https://atcoder.jp/contests/abc066/submissions/3470024
 */

function Main(input) {
  input = input.split('\n').map(v => v.split(' '))
	const n = input[0][0]
	const nums = input[1]
 
  // 初期値代入
	let ans = nums.slice(0, 1).toString()
 
  // 初期値は入れているので、1からスタート
	for (let i = 1; i < n; i++) {
		if (i % 2 == n % 2) {
			ans = ans + ' ' + nums[i]
		} else {
			ans = nums[i] + ' ' + ans
		}
	}
 
	console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
