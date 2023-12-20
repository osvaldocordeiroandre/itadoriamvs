import React from 'react'
import RoutesApp from './Routes/Router'
import { DarkModeProvider } from './context'

export default function App() {
  return (

    <DarkModeProvider>

      <RoutesApp />

    </DarkModeProvider>

  )
}
