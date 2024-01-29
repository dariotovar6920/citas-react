const Paciente = () => {
  return (
    <div className="m-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Dross</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">dario</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        email:{" "}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">10/12/2023</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi ex
          eos quibusdam delectus, fugiat odio voluptatibus voluptas tempore!
          Neque nostrum tempore fuga voluptatem doloribus architecto quos
          expedita? Illum, praesentium!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
