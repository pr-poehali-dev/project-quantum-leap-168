import Nav from "@/components/Nav"

const News = () => {
  const news = [
    { date: "1 июня 2025", title: "День защиты детей", text: "В нашей школе прошёл праздник, посвящённый Дню защиты детей. Учащиеся подготовили концертные номера и творческие выставки." },
    { date: "24 мая 2025", title: "Последний звонок — 2025", text: "Торжественная линейка для выпускников 9-х и 11-х классов. Поздравляем всех, кто завершает этот важный этап жизни!" },
    { date: "9 мая 2025", title: "День Победы", text: "Учащиеся школы приняли участие в городских мероприятиях, посвящённых 80-летию Победы в Великой Отечественной войне." },
    { date: "22 апреля 2025", title: "Субботник", text: "Весенний субботник объединил учеников, педагогов и родителей. Территория школы приведена в порядок к новому сезону." },
    { date: "14 марта 2025", title: "Олимпиада по математике", text: "Наши ученики заняли призовые места в городской олимпиаде по математике. Поздравляем победителей и их педагогов!" },
    { date: "23 февраля 2025", title: "День защитника Отечества", text: "Школьный концерт и спортивные соревнования в честь праздника. Мальчики показали силу и ловкость в весёлых эстафетах." },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <div
        className="relative"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7), #0B0F12 300px)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/96011115-ea91-4842-8842-c6aa9e84a4f1/bucket/8c550cb5-1dc9-4e4a-b4a4-0cb937814282.png)" }}
        />
        <div className="relative z-10">
          <Nav />
          <div className="px-6 pt-8 pb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Новости</h1>
            <p className="text-white/70 text-xl">Последние события МБОУ СОШ № 22 г. Шахты</p>
          </div>
        </div>
      </div>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 flex flex-col gap-4">
              <span className="text-sm text-white/50">{item.date}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default News
