# 問題URL: https://beta.atcoder.jp/contests/abc088/tasks/abc088_b
# 回答URL: https://qiita.com/d_nishiyama85/items/f79e034f6dcd4175cdc1#%E7%AC%AC-6-%E5%95%8F-abc-088-b---card-game-for-two-200-%E7%82%B9

_n = gets.to_i
as = gets.strip.split.map(&:to_i).sort.reverse

alice = 0
bob = 0

until as.empty? do
    alice += as.shift
    break if as.empty?
    bob += as.shift
end

puts (alice - bob)
