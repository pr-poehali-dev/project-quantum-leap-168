import Nav from "@/components/Nav"
import Icon from "@/components/ui/icon"

const items = [
  { icon: "Trophy", color: "text-yellow-500 bg-yellow-50", label: "Олимпиады", title: "Призёры городских олимпиад", text: "Ученики школы ежегодно занимают призовые места по математике, русскому языку и физике." },
  { icon: "Medal", color: "text-blue-500 bg-blue-50", label: "Спорт", title: "Победители соревнований", text: "Спортивные команды — призёры городских соревнований по волейболу, баскетболу и лёгкой атлетике." },
  { icon: "Star", color: "text-purple-500 bg-purple-50", label: "Творчество", title: "Лауреаты конкурсов", text: "Творческие коллективы — победители городских и региональных конкурсов самодеятельности и искусства." },
  { icon: "GraduationCap", color: "text-green-500 bg-green-50", label: "Выпускники", title: "100% поступление", text: "Выпускники успешно поступают в вузы Ростова-на-Дону, Москвы и Санкт-Петербурга." },
  { icon: "Heart", color: "text-red-500 bg-red-50", label: "Волонтёрство", title: "Волонтёрское движение", text: "Волонтёрский отряд помогает ветеранам и участвует в городских экологических акциях." },
  { icon: "Award", color: "text-orange-500 bg-orange-50", label: "Конкурсы", title: "«Ученик года»", text: "Наши учащиеся ежегодно становятся победителями городского конкурса «Ученик года»." },
]

const Achievements = () => {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="bg-[#1E73BE]">
        <Nav dark />
        <div className="px-6 pt-6 pb-14 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Наши достижения</h1>
          <p className="text-white/80">Гордимся успехами наших учеников</p>
        </div>
      </div>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}>
                  <Icon name={item.icon} size={20} />
                </div>
                <span className="text-sm text-gray-400 font-medium">{item.label}</span>
              </div>
              <h3 className="text-lg font-bold text-[#333333]">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Achievements
