import AdminSidebar from "./AdminSidebar"

const Layout = ({children}) => {
  return (
    <div className="bg-backgroud bg-cover">
      <div className="h-lvh flex flex-row backdrop-blur-sm bg-black/65 overflow-hidden">
        <AdminSidebar className=''/>
        <main className="flex-1 p-4 sm:p-8 lg:p-16 overflow-auto ">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout