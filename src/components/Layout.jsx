import { useLocation } from "react-router-dom"
import AdminSidebar from "./AdminSidebar"
import { useContext } from "react"
import { displayContext } from "../context/display"
import AdminNav from "./AdminNav"
import UserModal from "./UserModal"

const Layout = ({children}) => {
  const{visible} = useContext(displayContext)
  const location = useLocation()

  const isDashboard = location.pathname === '/Adminhome/Dashboard'

  return (
    <div className={`${isDashboard ? "bg-[#D9D9D9]" :'bg-backgroud'} bg-cover`}>
      <div className={`h-lvh flex flex-row ${isDashboard ? "":'backdrop-blur-sm bg-black/65'} overflow-hidden`}>
        <AdminSidebar className=''/>
        <main className={`${!isDashboard ? '' : 'p-4 lg:px-16'} ${visible ? 'hidden': ''} sm:p-4 mx-auto my-4 sm:my-0 w-full overflow-scroll flex flex-col`}>
          {!isDashboard && (
            <div className="flex justify-end mr-14 mb-4">
              <span className="z-50">
                <UserModal/>
              </span>
            </div>
          )}
          <div className="flex-grow">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout