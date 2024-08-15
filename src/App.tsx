import {ToastContainer} from 'react-toastify'
import PatientForm from "./Components/PatientForm"
import PatientsList from "./Components/PatientsList"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <>
      <div className="container mx-auto mt-20">
          <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
            Seguimiento de Pacientes {''}
            <span className="text-indigo-600">Veterinaria</span>
          </h1>

      <div className="mt-12 md:flex">
        <PatientForm/>
        
        <PatientsList/>
      </div>

      </div>
      <ToastContainer/>
      <footer>
        <p className='p-3 bg-violet-600 text-white font-bold text-center'>Derechos Reservados Kadhir Avila Gallardo</p>
      </footer>
    </>
  )
}

export default App
