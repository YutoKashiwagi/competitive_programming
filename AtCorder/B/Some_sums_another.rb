# 模範回答
# 問題URL: https://beta.atcoder.jp/contests/abc083/tasks/abc083_b

n, min, max = gets.chomp.split(' ').map(&:to_i)
answer_arry = []

def digit_sum(num)
  sum = 0
  while num > 0 do
    sum += num % 10
    num /= 10
  end
  sum
end

(0..n).each do |num|
  digit_sum = digit_sum(num)
  answer_arry << num if digit_sum >= min && digit_sum <= max
end

p answer_arry.sum
