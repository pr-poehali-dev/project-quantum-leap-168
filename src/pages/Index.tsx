import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import Nav from "@/components/Nav"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    { question: "Во сколько начинаются занятия?", answer: "Занятия в первую смену начинаются в 8:00, во вторую — в 13:30. Расписание звонков размещено на информационном стенде в холле школы и на сайте." },
    { question: "Как записать ребёнка в школу?", answer: "Для зачисления необходимо подать заявление через портал Госуслуги или лично в секретариат школы. При себе нужно иметь паспорт родителя, свидетельство о рождении ребёнка, документ о регистрации и медицинскую карту." },
    { question: "Есть ли в школе группа продлённого дня?", answer: "Да, группа продлённого дня работает для учащихся 1–4 классов. Запись осуществляется в начале учебного года через классного руководителя. ГПД работает до 18:00." },
    { question: "Как узнать об успеваемости ребёнка?", answer: "Оценки и посещаемость доступны в электронном дневнике. Доступ к личному кабинету выдаётся классным руководителем в начале учебного года." },
    { question: "Какие кружки и секции есть в школе?", answer: "В школе работают кружки по рисованию, хоровому пению, шахматам, а также спортивные секции — волейбол, баскетбол и лёгкая атлетика." },
    { question: "Как связаться с администрацией школы?", answer: "Вы можете обратиться лично в секретариат (каб. 1, 1 этаж) в рабочие дни с 8:00 до 17:00, позвонить по телефону или написать через форму обратной связи на сайте." },
  ]

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/96011115-ea91-4842-8842-c6aa9e84a4f1/bucket/8c550cb5-1dc9-4e4a-b4a4-0cb937814282.png)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>
        <Nav dark />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-balance">Средняя общеобразовательная школа № 22</h1>
          <p className="mt-4 text-xl text-white/80">г. Шахты, Ростовская область</p>
        </div>
      </div>

      {/* News Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Новости школы</h2>
            <p className="text-gray-500 text-lg">Последние события и объявления МБОУ СОШ № 22 г. Шахты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { date: "1 июня 2025", title: "День защиты детей", text: "В нашей школе прошёл праздник, посвящённый Дню защиты детей. Учащиеся подготовили концертные номера и творческие выставки." },
              { date: "24 мая 2025", title: "Последний звонок — 2025", text: "Торжественная линейка для выпускников 9-х и 11-х классов. Поздравляем всех, кто завершает этот важный этап жизни!" },
              { date: "9 мая 2025", title: "День Победы", text: "Учащиеся школы приняли участие в городских мероприятиях, посвящённых 80-летию Победы в Великой Отечественной войне." },
              { date: "22 апреля 2025", title: "Субботник", text: "Весенний субботник объединил учеников, педагогов и родителей. Территория школы приведена в порядок к новому сезону." },
              { date: "14 марта 2025", title: "Олимпиада по математике", text: "Наши ученики заняли призовые места в городской олимпиаде по математике. Поздравляем победителей и их педагогов!" },
              { date: "23 февраля 2025", title: "День защитника Отечества", text: "Школьный концерт и спортивные соревнования в честь праздника. Мальчики показали силу и ловкость в весёлых эстафетах." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm text-[#1E73BE] font-medium">{item.date}</span>
                <h3 className="text-lg font-bold text-[#333333]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-[#1E73BE] text-white hover:bg-[#1a65aa] rounded-full px-10">Все новости</Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Наши достижения</h2>
            <p className="text-gray-500 text-lg">Гордимся успехами наших учеников в учёбе, спорте и творчестве</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Trophy", color: "text-yellow-500 bg-yellow-50", label: "Олимпиады", title: "Призёры городских олимпиад", text: "Ученики ежегодно занимают призовые места по математике, русскому языку и физике." },
              { icon: "Medal", color: "text-blue-500 bg-blue-50", label: "Спорт", title: "Победители соревнований", text: "Команды школы — призёры городских соревнований по волейболу, баскетболу и лёгкой атлетике." },
              { icon: "Star", color: "text-purple-500 bg-purple-50", label: "Творчество", title: "Лауреаты конкурсов", text: "Творческие коллективы — победители городских и региональных конкурсов самодеятельности." },
              { icon: "GraduationCap", color: "text-green-500 bg-green-50", label: "Выпускники", title: "100% поступление", text: "Выпускники успешно поступают в вузы Ростова-на-Дону, Москвы и Санкт-Петербурга." },
              { icon: "Heart", color: "text-red-500 bg-red-50", label: "Волонтёрство", title: "Волонтёрское движение", text: "Волонтёрский отряд помогает ветеранам и участвует в городских экологических акциях." },
              { icon: "Award", color: "text-orange-500 bg-orange-50", label: "Конкурсы", title: "«Ученик года»", text: "Наши учащиеся ежегодно становятся победителями городского конкурса «Ученик года»." },
            ].map((item, i) => (
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Ответы на самые частые вопросы от родителей и учащихся — о расписании, зачислении, кружках и жизни школы.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#333333] pr-4">{faq.question}</span>
                    <Icon name={openFaq === index ? "Minus" : "Plus"} size={18} className="flex-shrink-0 text-[#1E73BE]" />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Контакты</h2>
            <p className="text-gray-500 text-lg">МБОУ СОШ № 22 г. Шахты</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-[#333333]">Написать нам</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#333333]">Имя</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#333333]">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#333333]">Сообщение</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none resize-none" placeholder="Ваш вопрос или обращение..." />
                </div>
                <Button className="w-full bg-[#1E73BE] text-white hover:bg-[#1a65aa] rounded-lg py-3">Отправить</Button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E73BE]/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={22} className="text-[#1E73BE]" />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Черникова Екатерина Олеговна</p>
                  <p className="text-gray-400 text-sm">Директор школы</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 flex items-start gap-4">
                <Icon name="MapPin" size={20} className="text-[#1E73BE] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Адрес</p>
                  <p className="text-[#333333] font-medium">Ростовская обл., г. Шахты, ул. Парковая, д. 2Б</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 flex items-start gap-4">
                <Icon name="Phone" size={20} className="text-[#1E73BE] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Телефон</p>
                  <a href="tel:+79044426174" className="text-[#1E73BE] font-medium hover:underline">+7 (904) 442-61-74</a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 flex items-start gap-4">
                <Icon name="Clock" size={20} className="text-[#1E73BE] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Режим работы</p>
                  <p className="text-[#333333] font-medium">Пн–Пт: 8:00 — 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E73BE] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={24} />
                <span className="text-xl font-bold">МБОУ СОШ № 22</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Муниципальное бюджетное общеобразовательное учреждение «Средняя общеобразовательная школа № 22» г. Шахты Ростовской области.
              </p>
              <p className="text-white/70 text-sm mt-3">+7 (904) 442-61-74</p>
              <p className="text-white/70 text-sm">ул. Парковая, д. 2Б, г. Шахты</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/60">ШКОЛА</h3>
              <ul className="space-y-2">
                {["Главная", "Новости", "Наши достижения", "Галерея"].map(item => (
                  <li key={item}><a href="#" className="text-white/80 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/60">РОДИТЕЛЯМ</h3>
              <ul className="space-y-2">
                {["Расписание", "Электронный дневник", "Питание", "Безопасность"].map(item => (
                  <li key={item}><a href="#" className="text-white/80 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/60">УЧАЩИМСЯ</h3>
              <ul className="space-y-2">
                {["Кружки и секции", "Олимпиады", "Библиотека", "Контакты"].map(item => (
                  <li key={item}><a href="#" className="text-white/80 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm text-center">© 2025 МБОУ СОШ № 22 г. Шахты</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index