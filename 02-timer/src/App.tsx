import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContextType'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
