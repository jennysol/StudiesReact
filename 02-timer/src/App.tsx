import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
