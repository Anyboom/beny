sport = [ "football", "basketball", "hockey", "tennis", "volleyball", "handball", "baseball", "mma", "australian_football", "motorsport", "academic_rowing", "american_football", "badminton" ]

sport.each do |item|
  Sport.find_or_create_by!(name: item)
end