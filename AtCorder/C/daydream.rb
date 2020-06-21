# 問題URL: https://beta.atcoder.jp/contests/abc049/tasks/arc065_a
# 未完成

str = gets.chomp.to_s.reverse
ans = 'NO'
strings = ['dream', 'dreamer', 'erase', 'eraser']

['dreamer', 'eraser'].each do |s|
  s.reverse!
  str.gsub!(/#{s}/, '')
end

['dream', 'erase'].each do |s|
  s.reverse!
  str.gsub!(/#{s}/, '')
end

ans = 'YES' if str.empty?
puts ans
