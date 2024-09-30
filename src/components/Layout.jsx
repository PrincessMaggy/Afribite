import AdminSidebar from "./AdminSidebar"

const Layout = ({children}) => {
  return (
    <div className="bg-backgroud bg-cover">
      <div className="h-lvh flex flex-row backdrop-blur-sm bg-black/65 overflow-hidden">
        <AdminSidebar className=''/>
        <main className="sm:p-16 mx-auto my-4 sm:my-0 w-full overflow-scroll">
            {children}
        </main>
    </div>
    </div>
  )
}

export default Layout
