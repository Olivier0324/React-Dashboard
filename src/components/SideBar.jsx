import { CarFront, ChevronDown, ChevronUp, LayoutDashboard } from "lucide-react"
import { useState } from "react"
function SideBar() {
    const [openDashboardDropDown, setOpenDashboardDropDown] = useState(false);
    function toggleDashboard() {
        setOpenDashboardDropDown(!openDashboardDropDown)
    }
  return (
      <div className='h-screen w-3xs bg-gray-50 sticky top-0 z-50 px-5 py-6 flex flex-col border-r border-gray-400 '>
          <div className="flex justify-between items-center gap-3">
              <CarFront className="bg-blue-900 text-white p-1.5  rounded" size={50}/> <span className="text-gray-900 font-bold text-[35px] ">Navigate</span>
          </div>
          <div className="mt-8 flex flex-col gap-1 cursor-pointer"  >
              <div className="p-4 bg-blue-400 rounded text-white flex justify-between" onClick={toggleDashboard}>
                  <div className="flex gap-1">
                       <LayoutDashboard className="text-white"/> <span>Dashboard</span>
                  </div>
                  {openDashboardDropDown?(<ChevronUp/>):(<ChevronDown/>)}
              </div>
              {/* DASHBOARD DROPDOWN */}
             <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out rounded  ${
          openDashboardDropDown ? 'max-h-60 py-4 px-4' : 'max-h-0 p-0'
        }`}>
  <ul className="flex flex-col gap-2 items-end text-center">
          <li className="text-gray-900 px-4 py-2 rounded hover:bg-blue-400 w-3/4">Overview</li>
          <li className="text-gray-900 px-4 py-2 rounded hover:bg-blue-400 w-3/4">Analytics</li>
          <li className="text-gray-900 px-4 py-2 rounded hover:bg-blue-400 w-3/4">Reports</li>
          <li className="text-gray-900 px-4 py-2 rounded hover:bg-blue-400 w-3/4">Settings</li>
        </ul>
</div>
              
          </div>
          
    </div>
  ) 
}

export default SideBar