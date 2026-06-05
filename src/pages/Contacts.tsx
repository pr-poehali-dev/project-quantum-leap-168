import Nav from "@/components/Nav"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="bg-[#1E73BE]">
        <Nav dark />
        <div className="px-6 pt-6 pb-14 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Контакты</h1>
          <p className="text-white/80">МБОУ СОШ № 22 г. Шахты</p>
        </div>
      </div>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none resize-none" placeholder="Ваш вопрос или обращение..." />
              </div>
              <Button className="w-full bg-[#1E73BE] text-white hover:bg-[#1a65aa] rounded-lg py-3">Отправить</Button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#1E73BE]/10 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={22} className="text-[#1E73BE]" />
              </div>
              <div>
                <p className="font-bold text-[#333333]">Черникова Екатерина Олеговна</p>
                <p className="text-gray-400 text-sm">Директор школы</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4 shadow-sm">
              <Icon name="MapPin" size={20} className="text-[#1E73BE] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400 mb-1">Адрес</p>
                <p className="text-[#333333] font-medium">Ростовская обл., г. Шахты, ул. Парковая, д. 2Б</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4 shadow-sm">
              <Icon name="Phone" size={20} className="text-[#1E73BE] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400 mb-1">Телефон</p>
                <a href="tel:+79044426174" className="text-[#1E73BE] font-medium hover:underline">+7 (904) 442-61-74</a>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4 shadow-sm">
              <Icon name="Clock" size={20} className="text-[#1E73BE] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400 mb-1">Режим работы</p>
                <p className="text-[#333333] font-medium">Пн–Пт: 8:00 — 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts
