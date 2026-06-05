import Nav from "@/components/Nav"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const Contacts = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Контакты</h1>
            <p className="text-white/70 text-xl">МБОУ СОШ № 22 г. Шахты</p>
          </div>
        </div>
      </div>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Написать нам</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Ваш вопрос или обращение..." />
              </div>
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                Отправить
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <Icon name="User" size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Черникова Екатерина Олеговна</h4>
                  <p className="text-gray-600">Директор школы</p>
                </div>
              </div>
            </div>

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
                <a href="tel:+79044426174" className="text-white hover:text-white/80 transition-colors">+7 (904) 442-61-74</a>
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
      </section>
    </div>
  )
}

export default Contacts