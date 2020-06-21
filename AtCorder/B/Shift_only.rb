# 問題URL: https://beta.atcoder.jp/contests/abc081/tasks/abc081_b

first_num = gets.chomp.to_i
numbers = gets.split.map(&:to_i)
answer = 0

def check_even?(first_num, numbers)
  even_count = 0
  numbers.each do |num|
    even_count += 1 if num.even?
  end
  even_count == first_num ? true : false
end

while check_even?(first_num, numbers) do
  numbers.map! do |num|
    num / 2
  end
  answer += 1
end

p answer
