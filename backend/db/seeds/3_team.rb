team = Team.find_or_initialize_by(name: "Зенит")
team.country = Country.find_or_create_by!(name: "Россия")
team.save

team = Team.find_or_initialize_by(name: "Спартак")
team.country = Country.find_or_create_by!(name: "Россия")
team.save

team = Team.find_or_initialize_by(name: "Ахмат")
team.country = Country.find_or_create_by!(name: "Россия")
team.save

team = Team.find_or_initialize_by(name: "Пари НН")
team.country = Country.find_or_create_by!(name: "Россия")
team.save
