import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import ContentApp from './components/ContentApp';

function App() {  

  return (
    <>
      <GlobalStyles />
      <main>
        <Header />
        <ContentApp />
      </main>
    </>
  )
}

export default App
