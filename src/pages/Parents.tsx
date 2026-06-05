import Nav from "@/components/Nav"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const faqs = [
  { question: "Во сколько начинаются занятия?", answer: "Занятия в первую смену начинаются в 8:00, во вторую — в 13:30. Расписание звонков размещено на информационном стенде в холле школы и на сайте." },
  { question: "Как записать ребёнка в школу?", answer: "Для зачисления необходимо подать заявление через портал Госуслуги или лично в секретариат школы. При себе нужно иметь паспорт родителя, свидетельство о рождении ребёнка, документ о регистрации и медицинскую карту." },
  { question: "Есть ли в школе группа продлённого дня?", answer: "Да, группа продлённого дня работает для учащихся 1–4 классов. Запись осуществляется в начале учебного года через классного руководителя. ГПД работает до 18:00." },
  { question: "Как узнать об успеваемости ребёнка?", answer: "Оценки и посещаемость доступны в электронном дневнике. Доступ к личному кабинету выдаётся классным руководителем в начале учебного года." },
  { question: "Как связаться с администрацией школы?", answer: "Вы можете обратиться лично в секретариат (каб. 1, 1 этаж) в рабочие дни с 8:00 до 17:00, позвонить по телефону +7 (904) 442-61-74 или написать через форму обратной связи." },
]

const Parents = () => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="bg-[#1E73BE]">
        <Nav dark />
        <div className="px-6 pt-6 pb-14 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Родителям</h1>
          <p className="text-white/80">Всё важное для родителей учащихся</p>
        </div>
      </div>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "BookOpen", title: "Электронный дневник", text: "Следите за оценками и посещаемостью онлайн" },
              { icon: "UtensilsCrossed", title: "Питание", text: "Горячее питание для всех учащихся школы" },
              { icon: "ShieldCheck", title: "Безопасность", text: "Охрана, видеонаблюдение, пропускной режим" },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 text-center flex flex-col items-center gap-3 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#1E73BE]/10 flex items-center justify-center">
                  <Icon name={card.icon} size={22} className="text-[#1E73BE]" />
                </div>
                <h3 className="font-bold text-lg text-[#333333]">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-6 text-[#333333]">Частые вопросы</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#333333] pr-4">{faq.question}</span>
                  <Icon name={open === i ? "Minus" : "Plus"} size={18} className="flex-shrink-0 text-[#1E73BE]" />
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Parents
