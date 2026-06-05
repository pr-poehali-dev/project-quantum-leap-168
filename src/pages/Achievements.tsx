import Nav from "@/components/Nav"
import Icon from "@/components/ui/icon"

const Achievements = () => {
  const items = [
    { icon: "Trophy", color: "yellow", title: "Призёры городских олимпиад", text: "Ученики школы ежегодно занимают призовые места на городских олимпиадах по математике, русскому языку и физике." },
    { icon: "Medal", color: "blue", title: "Победители соревнований", text: "Спортивные команды школы регулярно побеждают в городских соревнованиях по волейболу, баскетболу и лёгкой атлетике." },
    { icon: "Star", color: "purple", title: "Лауреаты конкурсов", text: "Творческие коллективы школы — победители городских и региональных конкурсов художественной самодеятельности и изобразительного искусства." },
    { icon: "GraduationCap", color: "green", title: "100% поступление", text: "Выпускники школы успешно поступают в высшие учебные заведения Ростова-на-Дону, Москвы и Санкт-Петербурга." },
    { icon: "Heart", color: "red", title: "Волонтёрское движение", text: "Волонтёрский отряд школы активно участвует в городских акциях, помогает ветеранам и организует экологические субботники." },
    { icon: "Award", color: "orange", title: "«Ученик года»", text: "Ежегодно наши учащиеся становятся финалистами и победителями городского конкурса «Ученик года» в различных номинациях." },
  ]

  const colorMap: Record<string, string> = {
    yellow: "bg-yellow-500/20 ring-yellow-500/40 text-yellow-400",
    blue: "bg-blue-500/20 ring-blue-500/40 text-blue-400",
    purple: "bg-purple-500/20 ring-purple-500/40 text-purple-400",
    green: "bg-green-500/20 ring-green-500/40 text-green-400",
    red: "bg-red-500/20 ring-red-500/40 text-red-400",
    orange: "bg-orange-500/20 ring-orange-500/40 text-orange-400",
  }

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <div className="relative" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7), #0B0F12 300px)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/96011115-ea91-4842-8842-c6aa9e84a4f1/bucket/8c550cb5-1dc9-4e4a-b4a4-0cb937814282.png)" }}
        />
        <div className="relative z-10">
          <Nav />
          <div className="px-6 pt-8 pb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Наши достижения</h1>
            <p className="text-white/70 text-xl">Гордимся успехами наших учеников</p>
          </div>
        </div>
      </div>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 flex flex-col gap-4">
              <div className={`w-10 h-10 rounded-full ring-1 flex items-center justify-center ${colorMap[item.color]}`}>
                <Icon name={item.icon} size={20} />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Achievements
