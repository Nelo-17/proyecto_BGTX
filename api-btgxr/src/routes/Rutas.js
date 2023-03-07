import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts";
import { Home,Footer, formAccesorio } from '../pages';
import { Home,Footer, formojetos } from '../pages';

export function Rutas() {
    const loadLayouts=(Layout,Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
   <Routes>
    <Route path='/' element={loadLayouts(Layout, Home)}/>
    <Route path='/alumno' element={loadLayouts(Layout, formAccesorio)}/>
    <Route path='/alumno' element={loadLayouts(Layout, formobjetos)}/>
   </Routes> 
  )
}
