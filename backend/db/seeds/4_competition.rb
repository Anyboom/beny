data = [
  {
    name: "Премьер лига",
    country: Country.find_by(name: "Россия")
  }
]

puts data

data.each do |d|
  competition = Competition.where(name: d[:name], country: d[:country]).first_or_create
end

