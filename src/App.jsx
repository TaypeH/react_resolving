import './App.css'
import UseMemoTask from './useMemoTask'
import UseRefTask from './useRefTask'
import UseRefUseCallbackTask from './useRef_useCallbackTask'
import UseCallback from './useCallbackTask'

const App = () => {
  // return <UseMemoTask />
  // return <UseMemoTask />
  // return <UseRefTask />
  // return <UseRefUseCallbackTask />
  return <UseCallback data={"test"} />
}

export default App
