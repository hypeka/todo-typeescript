import React from 'react'
import { Route , Routes } from 'react-router-dom'
import {AllTodo} from '../Pages/SidePage/AllTodo'
import {CompletedTodo} from '../Pages/SidePage/CompletedTodo'

import {CreateTodo} from '../Pages/SidePage/CreateTodo'
import {FavoriteTodo} from '../Pages/SidePage/FavoriteTodo'
import {ImportantTodo} from '../Pages/SidePage/ImportantTodo'
import {WelcomeTodo} from '../Pages/SidePage/WelcomeTodo'

interface Props{}

export const HomeRoutes = (props: Props) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<WelcomeTodo />} />
        <Route path='/important-todo' element={<ImportantTodo />} />
        <Route path='/completed-todo' element={<CompletedTodo />} />
        <Route path='/all-todo' element={<AllTodo />} />
        <Route path='/create-todo' element={<CreateTodo />} />
        <Route path='/favorite-todo' element={<FavoriteTodo />} />
    </Routes>
</>
  )
}