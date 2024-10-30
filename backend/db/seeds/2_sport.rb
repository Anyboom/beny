sport = [ "football", "basketball", "hockey", "tennis", "volleyball", "handball", "baseball", "mma", "australian_football", "motorsport", "academic_rowing", "american_football", "badminton" ]

sport.each do |sport|
  Sport.create(name: sport)
end