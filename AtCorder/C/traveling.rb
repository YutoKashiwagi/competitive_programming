# 解けなかった問題
# 問題URL: https://atcoder.jp/contests/abc086/tasks/arc089_a

count = gets.chomp.to_i
data = count.times.map { gets.strip.split.map(&:to_i) }
current = [0, 0, 0]

def is_reachable?(current, next_data)
  tc, xc, yc = current
  tn, xn, yn = next_data
  dt = tn - tc
  dist = (xn - xc).abs + (yn - yc).abs

  return false if dist > dt
  (dist - dt).even?
end

data.each do |d|
  unless is_reachable?(current, d)
    puts 'No'
    exit 0
  end
  current = d
end

puts 'Yes'
