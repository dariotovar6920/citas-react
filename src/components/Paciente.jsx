const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  //destructuring igualando a pacientes
  const {nombre, propietario, email, fecha, sintoma, id} = paciente;

  const handleEliminar = () =>{

    const respuesta = confirm('Deseas eliminar este paciente?');

    if(respuesta){
      eliminarPaciente(id);
    }
  }

  return (
    <div className="m-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre.toUpperCase()}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{propietario.toUpperCase()}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        email:{" "}
        <span className="font-normal normal-case">{email.toUpperCase()}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha.toUpperCase()}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          {sintoma.toUpperCase()}
        </span>
      </p>

      <div className="flex justify-between mt-10">
        <button 
         type="button"
         className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white 
                    font-bold uppercase rounded-lg"
          onClick={() =>setPaciente(paciente)}>
          Editar
        </button>

        <button 
         type="button"
         className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white 
                    font-bold uppercase rounded-lg"
          onClick={handleEliminar}          >
          Eliminar
        </button>
      </div>

    </div>
  );
};

export default Paciente;
