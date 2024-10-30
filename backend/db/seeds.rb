root = Rails.root.join('db/seeds/*.rb')

Dir[root].sort.each do |file|
  puts "Processing #{file.split('/').last}"
  require file
end