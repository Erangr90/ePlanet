// Node packages
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Components
import Header from './Header'
import Footer from './Footer'
// Screens
import HomeScreen from '../screens/HomeScreen'
import MovieScreen from '../screens/MovieScreen'

const App = ()=> {
  return (
    <Router>
    <Header/>
    <main className='py-3'>
    <Container>
    <Route path='/' component={HomeScreen} exact/>
    <Route path='/movie/:id' component={MovieScreen} exact/>
    <HomeScreen/>
    </Container>
    </main>
    <Footer/>
    </Router>
  )
}

export default App
