import { Compass, Lock, Sparkles, ShieldCheck, Wallet, Leaf, Plus, Minus, Mail, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
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
    {
      question: "Во сколько начинаются занятия?",
      answer:
        "Занятия в первую смену начинаются в 8:00, во вторую — в 13:30. Расписание звонков размещено на информационном стенде в холле школы и на сайте.",
    },
    {
      question: "Как записать ребёнка в школу?",
      answer:
        "Для зачисления необходимо подать заявление через портал Госуслуги или лично в секретариат школы. При себе нужно иметь паспорт родителя, свидетельство о рождении ребёнка, документ о регистрации и медицинскую карту.",
    },
    {
      question: "Есть ли в школе группа продлённого дня?",
      answer:
        "Да, группа продлённого дня работает для учащихся 1–4 классов. Запись осуществляется в начале учебного года через классного руководителя. ГПД работает до 18:00.",
    },
    {
      question: "Как узнать об успеваемости ребёнка?",
      answer:
        "Оценки и посещаемость доступны в электронном дневнике. Доступ к личному кабинету выдаётся классным руководителем в начале учебного года. Также можно обратиться напрямую к учителю или на родительском собрании.",
    },
    {
      question: "Какие кружки и секции есть в школе?",
      answer:
        "В школе работают кружки по рисованию, хоровому пению, шахматам, а также спортивные секции — волейбол, баскетбол и лёгкая атлетика. Расписание секций уточняйте у классного руководителя или в учительской.",
    },
    {
      question: "Как связаться с администрацией школы?",
      answer:
        "Вы можете обратиться лично в секретариат (каб. 1, 1 этаж) в рабочие дни с 8:00 до 17:00, позвонить по телефону школы или написать через форму обратной связи на сайте. Директор принимает по предварительной записи.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/96011115-ea91-4842-8842-c6aa9e84a4f1/bucket/8c550cb5-1dc9-4e4a-b4a4-0cb937814282.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-center p-6">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Главная", "Новости", "Наши достижения", "Родителям", "Учащимся", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-balance">Средняя общеобразовательная школа № 22</h1>
        </div>
      </div>



      {/* News Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Новости школы</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Последние события и объявления МБОУ СОШ № 22 г. Шахты
              </p>
            </div>

            {/* News Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-4">
                <span className="text-sm text-white/50">1 июня 2025</span>
                <h3 className="text-xl font-semibold">День защиты детей</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  В нашей школе прошёл праздник, посвящённый Дню защиты детей. Учащиеся подготовили концертные номера и творческие выставки.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-4">
                <span className="text-sm text-white/50">24 мая 2025</span>
                <h3 className="text-xl font-semibold">Последний звонок — 2025</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Торжественная линейка для выпускников 9-х и 11-х классов. Поздравляем всех, кто завершает этот важный этап жизни!
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-4">
                <span className="text-sm text-white/50">9 мая 2025</span>
                <h3 className="text-xl font-semibold">День Победы</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Учащиеся школы приняли участие в городских мероприятиях, посвящённых 80-летию Победы в Великой Отечественной войне.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-4">
                <span className="text-sm text-white/50">22 апреля 2025</span>
                <h3 className="text-xl font-semibold">Субботник</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Весенний субботник объединил учеников, педагогов и родителей. Территория школы приведена в порядок к новому сезону.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-4">
                <span className="text-sm text-white/50">14 марта 2025</span>
                <h3 className="text-xl font-semibold">Олимпиада по математике</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Наши ученики заняли призовые места в городской олимпиаде по математике. Поздравляем победителей и их педагогов!
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col gap-4">
                <span className="text-sm text-white/50">23 февраля 2025</span>
                <h3 className="text-xl font-semibold">День защитника Отечества</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Школьный концерт и спортивные соревнования в честь праздника. Мальчики показали силу и ловкость в весёлых эстафетах.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Все новости
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед записью на экспедицию — от уровня сложности до условий бронирования.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Icon name="Minus" size={20} className="flex-shrink-0" />
                      ) : (
                        <Icon name="Plus" size={20} className="flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Контакты</h2>
              <p className="text-xl text-white/80">МБОУ СОШ № 22 г. Шахты</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Написать нам</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Ваш вопрос или обращение..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-6">
                {/* Director Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                      <Icon name="User" size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Черникова Екатерина Олеговна</h4>
                      <p className="text-gray-600">Директор школы</p>
                    </div>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex items-start gap-4">
                  <Icon name="MapPin" size={22} className="text-white/60 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/50 mb-1">Адрес</p>
                    <p className="text-white">Ростовская обл., г. Шахты, ул. Парковая, д. 2Б</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex items-start gap-4">
                  <Icon name="Phone" size={22} className="text-white/60 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/50 mb-1">Телефон</p>
                    <p className="text-white">Уточните номер у администрации</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex items-start gap-4">
                  <Icon name="Clock" size={22} className="text-white/60 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/50 mb-1">Режим работы</p>
                    <p className="text-white">Пн–Пт: 8:00 — 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Compass" size={24} />
                  <span className="text-xl font-semibold">Horizon Adventures</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Авторские экспедиции и приключенческие туры по диким местам планеты. Пещеры, горы, джунгли — мы ведём туда, куда не доходят обычные туристы.
                </p>
              </div>

              {/* Expedition Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ТУРЫ</h3>
                <ul className="space-y-3">
                  {["Пещерные экспедиции", "Горные походы", "Джунгли", "Зимние туры"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Безопасность", "Гиды", "Экология"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Вопросы и ответы", "Контакты", "Условия бронирования", "Страховка"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости и анонсы экспедиций</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Horizon Adventures — авторские экспедиции</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index