import Nav from "@/components/Nav"
import Icon from "@/components/ui/icon"

const clubs = [
  { icon: "Palette", title: "Изостудия", text: "Рисование, живопись и декоративно-прикладное творчество" },
  { icon: "Music", title: "Хоровое пение", text: "Школьный хор — участник городских конкурсов" },
  { icon: "Crown", title: "Шахматы", text: "Развиваем логику и стратегическое мышление" },
  { icon: "Volleyball", title: "Волейбол", text: "Сборная школы — призёр городских соревнований" },
  { icon: "Circle", title: "Баскетбол", text: "Тренировки для учащихся 5–11 классов" },
  { icon: "Zap", title: "Лёгкая атлетика", text: "Бег, прыжки, метание — для всех возрастов" },
]

const Students = () => {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="bg-[#1E73BE]">
        <Nav dark />
        <div className="px-6 pt-6 pb-14 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Учащимся</h1>
          <p className="text-white/80">Кружки, секции и полезная информация для школьников</p>
        </div>
      </div>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#333333]">Кружки и секции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {clubs.map((club, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#1E73BE]/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={club.icon} size={20} className="text-[#1E73BE]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-[#333333]">{club.title}</h3>
                  <p className="text-gray-500 text-sm">{club.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-[#333333]">Полезное</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "BookOpen", title: "Электронный дневник", text: "Расписание, оценки, домашние задания онлайн" },
              { icon: "Trophy", title: "Олимпиады", text: "Городские и всероссийские олимпиады для школьников" },
              { icon: "Library", title: "Библиотека", text: "Школьная библиотека — каб. 15, работает ежедневно" },
              { icon: "Phone", title: "Горячая линия", text: "По любым вопросам: +7 (904) 442-61-74" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1E73BE]/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={20} className="text-[#1E73BE]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-[#333333]">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Students
