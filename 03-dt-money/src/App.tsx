import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
      
  )
}
