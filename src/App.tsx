import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import { Container, FormControl, InputLabel, Typography } from '@mui/material'
import AddHabitForm from './components/add-habit-form'

function App() {

  return (
    <>
    <Provider store={store}>
      <Container maxWidth="md" >
        <AddHabitForm />
      </Container>
    </Provider>
    </>
  )
}

export default App
