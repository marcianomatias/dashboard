import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'

const App = () => {
    const activeMenu = true;
  return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
                    <TooltipComponent content='Settings' position='Top'>
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl
                                        hover:bg-light-gray text-white' style={{background:'blue', borderRadius: '50%'}}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        Sidebar
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        Sidebar w-0
                    </div>
                )}
                <div className={
                    `dark:bg-main-bg bag-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                }>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    navbar
                </div>
                </div>
                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path='/' element="Ecommerce" />
                        <Route path='/ecommerce' element="Ecommerce" />

                        {/* Pages */}
                        <Route path='/orders' element="Orders" />
                        <Route path='/employees' element="Employees" />
                        <Route path='/customers' element="Customers" />

                        {/* Apps */}
                        <Route path='/kanban' element="Kanban" />
                        <Route path='/editor' element="Editor" />
                        <Route path='/calendar' element="Calendar" />
                        <Route path='/color-picker' element="ColorPicker" />

                    </Routes>
                </div>
                
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App