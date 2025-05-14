import { PropHello } from './helloworld.dto'
import './App.css'
import Button from './Button'
import HelloWorld from './hellowworld'

function App() {
  const props: PropHello = {
   name : 'vian',
   gender : 'male', 
   umur : 20 
  }

  return (
     <> 
     {/* //jangan lupa ini (fragment) agar bisa ngereturn dan biar aman// */}
    <h1>Hellow world </h1>
    {/* <h2>react with vite</h2> */}
    <HelloWorld {...props}/>
    <Button />
    
    </>
  )
}

export default App
