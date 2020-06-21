# 問題URL: https://beta.atcoder.jp/contests/abc083/tasks/abc083_b
n, min, max = gets.chomp.split(' ').map(&:to_i)
answer_arry = []

(0..n).each do |num|
  numbers = num.to_s.chars.map(&:to_i)
  numbers_sum = numbers.sum
  answer_arry << num if numbers_sum >= min && numbers_sum <= max
end

p answer_arry.sum
