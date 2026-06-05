import { Link, useLocation } from "react-router-dom"

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Новости", path: "/news" },
  { label: "Наши достижения", path: "/achievements" },
  { label: "Родителям", path: "/parents" },
  { label: "Учащимся", path: "/students" },
  { label: "Контакты", path: "/contacts" },
]

const Nav = ({ dark = false }: { dark?: boolean }) => {
  const location = useLocation()

  return (
    <nav className="relative z-10 flex items-center justify-center p-6">
      <div className="flex flex-wrap items-center justify-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-full transition-colors text-sm font-medium ${
              location.pathname === item.path
                ? "bg-[#1E73BE] text-white"
                : dark
                  ? "bg-black/40 ring-1 ring-white/20 text-white hover:bg-[#1E73BE]/40"
                  : "text-[#333333] hover:bg-[#1E73BE]/10 hover:text-[#1E73BE]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav
