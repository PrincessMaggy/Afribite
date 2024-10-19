import { useLocation } from "react-router-dom"
import AdminSidebar from "./AdminSidebar"
import { useContext } from "react"
import { displayContext } from "../context/display"
import AdminNav from "./AdminNav"

const Layout = ({children}) => {
  const{visible} = useContext(displayContext)
  const location = useLocation()

  return (
    <div className={`${location.pathname === '/Adminhome/Dashboard' ? "bg-[#D9D9D9]" :'bg-backgroud'} bg-cover`}>
      <div className={`h-lvh flex flex-row ${location.pathname === '/Adminhome/Dashboard'? "":'backdrop-blur-sm bg-black/65'} overflow-hidden`}>
        <AdminSidebar className=''/>
        <main className={`${location.pathname !== '/Adminhome/Dashboard' ? '' : 'p-4 lg:px-16'} ${visible ? 'hidden': ''} sm:p-4 mx-auto my-4 sm:my-0 w-full overflow-scroll`}>
            <AdminNav className={`${location.pathname !== '/Adminhome/Dashboard' ? 'w-[90%]' : 'w-full' }`}/>
            {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
