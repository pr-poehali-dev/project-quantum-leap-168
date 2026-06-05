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
    <div className="min-h-screen bg-[#0B1929] text-white">
      <div className="relative" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7), #0B0F12 300px)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/96011115-ea91-4842-8842-c6aa9e84a4f1/bucket/8c550cb5-1dc9-4e4a-b4a4-0cb937814282.png)" }}
        />
        <div className="relative z-10">
          <Nav />
          <div className="px-6 pt-8 pb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Родителям</h1>
            <p className="text-white/70 text-xl">Всё важное для родителей учащихся</p>
          </div>
        </div>
      </div>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "BookOpen", title: "Электронный дневник", text: "Следите за оценками и посещаемостью онлайн" },
              { icon: "UtensilsCrossed", title: "Питание", text: "Горячее питание для всех учащихся школы" },
              { icon: "ShieldCheck", title: "Безопасность", text: "Охрана, видеонаблюдение, пропускной режим" },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon name={card.icon} size={22} />
                </div>
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="text-white/70 text-sm">{card.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-6">Частые вопросы</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <Icon name={open === i ? "Minus" : "Plus"} size={20} className="flex-shrink-0" />
                </button>
                {open === i && (
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
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