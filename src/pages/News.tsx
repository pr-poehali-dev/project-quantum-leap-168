import Nav from "@/components/Nav"

const news = [
  { date: "1 июня 2025", title: "День защиты детей", text: "В нашей школе прошёл праздник, посвящённый Дню защиты детей. Учащиеся подготовили концертные номера и творческие выставки." },
  { date: "24 мая 2025", title: "Последний звонок — 2025", text: "Торжественная линейка для выпускников 9-х и 11-х классов. Поздравляем всех, кто завершает этот важный этап жизни!" },
  { date: "9 мая 2025", title: "День Победы", text: "Учащиеся школы приняли участие в городских мероприятиях, посвящённых 80-летию Победы в Великой Отечественной войне." },
  { date: "22 апреля 2025", title: "Субботник", text: "Весенний субботник объединил учеников, педагогов и родителей. Территория школы приведена в порядок к новому сезону." },
  { date: "14 марта 2025", title: "Олимпиада по математике", text: "Наши ученики заняли призовые места в городской олимпиаде по математике. Поздравляем победителей и их педагогов!" },
  { date: "23 февраля 2025", title: "День защитника Отечества", text: "Школьный концерт и спортивные соревнования в честь праздника. Мальчики показали силу и ловкость в весёлых эстафетах." },
]

const News = () => {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="bg-[#1E73BE]">
        <Nav dark />
        <div className="px-6 pt-6 pb-14 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Новости</h1>
          <p className="text-white/80">Последние события МБОУ СОШ № 22 г. Шахты</p>
        </div>
      </div>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm text-[#1E73BE] font-medium">{item.date}</span>
              <h3 className="text-lg font-bold text-[#333333]">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default News
