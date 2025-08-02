import { AlignJustify, DollarSign, Search, ShoppingCart, Truck, User2Icon } from "lucide-react"
import { Graph } from "./Graph"

function MainContent() {
  return (
      <div className=' text-gray-500 grow  bg-gray-100'>
          <div className="px-4 py-4 border-b border-gray-300 sticky top-0 z-40 bg-gray-50">
              <div className="flex items-center gap-6">
                  <AlignJustify size={40} className="cursor-pointer text-white p-1.5 text-3xl rounded bg-blue-900"/>
                  <form className="border border-gray-300 w-fit flex items-center rounded p-2 gap-2 ">
                      <Search size={20} />
                      <input type="search" name="" id="" className="focus:outline-hidden px-2" placeholder="Search here..." />
                      <button className="bg-blue-900 text-white px-8 py-1.5 rounded">Search</button>
                      
                  </form>
              </div>
              
          </div>
          <div className="mt-4 px-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-5 ">Analytics <span className="font-normal">dashboard</span></h1> 
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Start of the card */}
                      <div className="p-4 bg-gray-50 shadow-lg shadow-gray-200 flex flex-col gap-y-2 rounded">
                          <div className="flex justify-between items-center">
                              <h3 className="text-gray-800 font-bold"> Sales</h3>
                              <Truck className="p-2 text-white bg-blue-600 rounded-full" size={40}/>
                          </div>
                          <p className="text-3xl text-gray-900">2.382</p>
                          <p className="mt-2">
                              <span className="p-1 mr-2 bg-blue-200 text-blue-700 rounded">-3.65%</span> since last week
                              
                          </p>
                      </div>
                      {/* End of the card */}
                      {/* Start of the card */}
                      <div className="p-4 bg-gray-50 shadow-lg shadow-gray-200 flex flex-col gap-y-2 rounded">
                          <div className="flex justify-between items-center">
                              <h3 className="text-gray-800 font-bold"> Earnings</h3>
                              <DollarSign className="p-2 text-white bg-blue-500 rounded-full" size={40} />
                              
                          </div>
                          <p className="text-3xl text-gray-900">2.382</p>
                          <p className="mt-2">
                              <span className="p-1 mr-2 bg-green-200 text-green-700 rounded">-3.65%</span> since last week
                              
                          </p>
                      </div>
                      {/* End of the card */}
                      {/* Start of the card */}
                      <div className="p-4 bg-gray-50 shadow-lg shadow-gray-200 flex flex-col gap-y-2 rounded">
                          <div className="flex justify-between items-center">
                              <h3 className="text-gray-800 font-bold">Visitors</h3>
                              <User2Icon className="p-2 text-white bg-blue-500 rounded-full" size={40}/>
                          </div>
                          <p className="text-3xl text-gray-900">2.382</p>
                          <p className="mt-2">
                              <span className="p-1 mr-2 bg-green-200 text-green-700 rounded">-3.65%</span> since last week
                              
                          </p>
                      </div>
                      {/* End of the card */}
                      {/* Start of the card */}
                      <div className="p-4 bg-gray-50 shadow-lg shadow-gray-200 flex flex-col gap-y-2 rounded">
                          <div className="flex justify-between items-center">
                              <h3 className="text-gray-800 font-bold"> Orders</h3>
                              <ShoppingCart className="p-2 text-white bg-blue-500 rounded-full" size={40} />
                              
                              
                          </div>
                          <p className="text-3xl text-gray-900">2.382</p>
                          <p className="mt-2">
                              <span className="p-1 mr-2 bg-red-200 text-red-700 rounded">-3.65%</span> since last week
                              
                          </p>
                      </div>
                      {/* End of the card */}
                      
                  </div>
                  {/* End of cards */}
                  <div className="bg-gray-50 p-4">
                      <div className="flex justify-between">
                          <h2 className="w-1/2">Recent Movement</h2>
                          <div className="flex items-center gap-2">
                              <div className="bg-blue-100 px-4 py-2 rounded text-center "><select name="" id="" className="border-hidden focus:outline-hidden ">
                                  <option value="Jan">January</option>
                                  <option value="Jan">February</option>
                                  <option value="Jan">March</option>
                              </select></div>
                              <input type="search" name="" id="" placeholder="Search"className="grow px-4 py-2 border-hidden focus:outline-hidden bg-blue-100 px-4 py-1 rounded text-blue-900" />
                          </div>
                          
                      </div>
                      <div className="mt-4">
                              <Graph/>
                              
                          </div>
                  </div>
                  {/* Graphs */}
              
              </div>  
          </div>
    </div>
  )
}

export default MainContent