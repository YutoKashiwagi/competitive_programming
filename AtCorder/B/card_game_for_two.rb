# 問題URL: https://beta.atcoder.jp/contests/abc088/tasks/abc088_b

card_count = gets.chomp.to_i
cards = gets.chomp.split(' ').map(&:to_i)

alice_cards = []
bob_cards = []

for i in 1..card_count do
  if i.odd?
    alice_cards << cards.max unless cards.empty?
  else
    bob_cards << cards.max unless cards.empty?
  end
  cards.delete_at(cards.find_index(cards.max)) 
end

p alice_cards.sum - bob_cards.sum
