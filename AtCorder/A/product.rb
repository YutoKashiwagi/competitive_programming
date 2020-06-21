# 問題URL: https://beta.atcoder.jp/contests/abc086/tasks/abc086_a

a, b = gets.strip.split.map(&:to_i)
product = a * b
puts product.odd? ? 'Odd' : 'Even'
