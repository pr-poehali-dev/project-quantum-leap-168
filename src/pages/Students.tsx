import Nav from "@/components/Nav"
import Icon from "@/components/ui/icon"

const Students = () => {
  const clubs = [
    { icon: "Palette", title: "Изостудия", text: "Рисование, живопись и декоративно-прикладное творчество" },
    { icon: "Music", title: "Хоровое пение", text: "Школьный хор — участник городских конкурсов" },
    { icon: "Crown", title: "Шахматы", text: "Развиваем логику и стратегическое мышление" },
    { icon: "Volleyball", title: "Волейбол", text: "Сборная школы — призёр городских соревнований" },
    { icon: "Circle", title: "Баскетбол", text: "Тренировки для учащихся 5–11 классов" },
    { icon: "Zap", title: "Лёгкая атлетика", text: "Бег, прыжки, метание — для всех возрастов" },
  ]

  return (
    <div className="min-h-screen bg-[#0B1929] text-white">
      <div className="relative" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7), #0B0F12 300px)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/96011115-ea91-4842-8842-c6aa9e84a4f1/bucket/8c550cb5-1dc9-4e4a-b4a4-0cb937814282.png)" }}
        />
        <div className="relative z-10">
          <Nav />
          <div className="px-6 pt-8 pb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Учащимся</h1>
            <p className="text-white/70 text-xl">Кружки, секции и полезная информация для школьников</p>
          </div>
        </div>
      </div>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Кружки и секции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {clubs.map((club, i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={club.icon} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{club.title}</h3>
                  <p className="text-white/70 text-sm">{club.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Полезные ссылки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "BookOpen", title: "Электронный дневник", text: "Расписание, оценки, домашние задания онлайн" },
              { icon: "Trophy", title: "Олимпиады", text: "Городские и всероссийские олимпиады для школьников" },
              { icon: "Library", title: "Библиотека", text: "Школьная библиотека — каб. 15, работает ежедневно" },
              { icon: "Phone", title: "Горячая линия", text: "По любым вопросам: +7 (904) 442-61-74" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.text}</p>
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