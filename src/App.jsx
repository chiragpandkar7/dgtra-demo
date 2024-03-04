import { Provider } from 'react-redux'
import './App.css'
import MembersPanel from './components/Members'
import ProjectTable from './components/ProjectTable'
import store from './store/index'

function App() {


  return (
    <div> 
      <Provider store={store}>
        <MembersPanel />
  
        <ProjectTable />
      </Provider>

    </div>
  )
}

export default App
