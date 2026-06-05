import { Link, useLocation } from "react-router-dom"

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Новости", path: "/news" },
  { label: "Наши достижения", path: "/achievements" },
  { label: "Родителям", path: "/parents" },
  { label: "Учащимся", path: "/students" },
  { label: "Контакты", path: "/contacts" },
]

const Nav = () => {
  const location = useLocation()

  return (
    <nav className="relative z-10 flex items-center justify-center p-6">
      <div className="flex flex-wrap items-center justify-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 backdrop-blur rounded-full transition-colors ring-1 ${
              location.pathname === item.path
                ? "bg-white text-black ring-white"
                : "bg-black/40 ring-white/20 text-white hover:bg-black/50"
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
