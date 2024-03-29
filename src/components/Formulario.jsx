import {useState, useEffect} from 'react';
import Error from './Error'

const Formulario = ({pacientes,setPacientes,paciente, setPaciente}) => {

  const [nombre, setNombre] = useState(''); 
  const [propietario, setPropietario] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [fecha, setFecha] = useState(''); 
  const [sintoma, setSintoma] = useState(''); 
  const [error, setError] = useState(false);

  useEffect(() =>{
        if(Object.keys(paciente).length > 0){//comprobar si un objeto tiene algo
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintoma(paciente.sintoma)
        }
            
  }, [paciente]);

  //generando el id para usarlo como key único
  const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha;
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    //validación del formulario
    if([nombre, propietario, email, fecha, sintoma].includes('')){

        setError(true);
        return;
    }

    setError(false);

    //objeto de paciente
    const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintoma,
    }

    if(paciente.id){
        //Editando el registro
        objetoPaciente.id = paciente.id;

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === 
                                      paciente.id ? objetoPaciente : pacienteState)

        console.log(pacientesActualizados);

        setPacientes(pacientesActualizados);   
        setPaciente({});                           
    }else{
        //Nuevo registro
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente]);
    }


    //reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintoma('');

    }


  return (
    <div className="md:w-1/2 lg:w-2/5 m-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>


     <form
         onSubmit={handleSubmit} 
         className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
         >
            {error && <Error><p>Todos los campos son obligatorios</p></Error>  }
        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase">Nombre Mascota</label>
            <input 
                id="mascota"
                type="text" 
                placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md uppercase"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) }
            /> 
        </div>

        <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase">Propietario</label>
            <input 
                id="propietario"
                type="text" 
                placeholder="Nombre del propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 roundex-md uppercase"
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value) }
            /> 
        </div>

        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase ">Email</label>
            <input 
                id="email"
                type="email" 
                placeholder="Email Contacto Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 roundex-md"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
            /> 
        </div>

        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase ">Alta</label>
            <input 
                id="alta"
                type="date" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 roundex-md"
                value={fecha}
                onChange={ (e) => setFecha(e.target.value) }
            /> 
        </div>

        <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase">Síntomas</label>

            <textarea 
                 id="sintomas" 
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 roundex-md uppercase"
                 placeholder="Describe los síntomas"
                 value={sintoma}
                 onChange={ (e) => setSintoma(e.target.value) }
            />
        </div>

        <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                       hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
            value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
     </form>

    </div>
  )
}

export default Formulario
