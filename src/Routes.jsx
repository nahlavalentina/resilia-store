import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Administrator from './pages/Administrator/Administrator'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Form from './pages/Form/Form'

const Routes = () => {
  return (
   <BrowserRouter>
   <Header />
   <Switch>
<Route path='/' element={<Home/>}/>
<Route path='/produtos/:category' element={<Product/>}/>
<Route path='/produtos/:id' element={<SingleProduct/>}/>
<Route path='/admin' element={<Administrator/>}/>
<Route path='/admin/new' element={<Form/>}/>
   </Switch>
   </BrowserRouter>
  )
}

export default Routes
