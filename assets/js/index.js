$(document).ready(function () {
    function Paciente(nombre, edad, rut, diagnostico) {
        let _nombre = nombre;
        let _edad = edad;
        let _rut = rut;
        let _diagnostico = diagnostico;

        Object.defineProperty(this, '_getNombre', {
            get: function () {
                return _nombre;
            }
        });
        Object.defineProperty(this, '_setNombre', {
            set: function (nombre) {
                _nombre = nombre;
            }
        });
        Object.defineProperty(this, '_getEdad', {
            get: function (edad) {
                return _edad;
            }
        });
        Object.defineProperty(this, '_setEdad', {
            set: function (edad) {
                _edad = edad;
            }
        });
        Object.defineProperty(this, '_getRut', {
            get: function () {
                return _rut;
            }
        })
        Object.defineProperty(this, '_setRut', {
            set: function (rut) {
                _rut = rut;
            }
        });
        Object.defineProperty(this, '_getDiagnostico', {
            get: function () {
                return _diagnostico;
            }
        });
        Object.defineProperty(this, '_setDiagnostico', {
            set: function (diagnostico) {
                _diagnostico = diagnostico;
            }
        });
    }
    Paciente.prototype.getNombre = function () {
        return this._getNombre;
    };
    Paciente.prototype.setNombre = function (nombre) {
        this._setNombre = nombre;
    };
    Paciente.prototype.getEdad = function () {
        return this._getEdad;
    };
    Paciente.prototype.setEdad = function (edad) {
        this._setEdad = edad;
    };
    Paciente.prototype.getRut = function () {
        return this._getRut;
    };
    Paciente.prototype.setRut = function (rut) {
        this._setRut = rut;
    };
    Paciente.prototype.getDiagnostico = function () {
        return this._getDiagnostico;
    }
    Paciente.prototype.setNombre = function (diagnostico) {
        this._setDiagnostico = diagnostico;
    }

    function Consultorio(nombre, paciente) {
        let _nombre = nombre;
        let _paciente = paciente || []

        Object.defineProperty(this, '_getNombre', {
            get: function () {
                return _nombre;
            }
        });
        Object.defineProperty(this, '_setNombre', {
            set: function (nombre) {
                _nombre = nombre;
            }
        });
        Object.defineProperty(this, '_getPaciente', {
            get: function () {

                return _paciente;
            }
        });
        Object.defineProperty(this, '_setPaciente', {
            set: function (paciente) {
                _pacientes = pacientes;
            }
        });
    }
    Consultorio.prototype.getNombre = function () {
        return this._getNombre;
    }
    Consultorio.prototype.setNombre = function (nombre) {
        this._setNombre = nombre;
    }
    Consultorio.prototype.getPacientes = function () {
        return this._getPaciente;
    }
    Consultorio.prototype.setPacientes = function (paciente) {
        this._setPaciente = paciente;
    }

    Consultorio.prototype.agregarPaciente = function (paciente) {
        this.getPacientes().push(paciente);
    }


    Consultorio.prototype.mostrarPacientes = function () {

        this.getPacientes().forEach(paciente => {
            console.log(`El nombre del paciente es: ${paciente.getNombre()}, su edad es: ${paciente.getEdad()}, su rut es:
            ${paciente.getRut()} y su diagnostico es ${paciente.getDiagnostico()}`)
        });

    }

    Consultorio.prototype.filtrarPorNombre = function (nombrePaciente) {

        let filtro = this.getPacientes().filter(function (nombre) {
            return nombre.getNombre() == nombrePaciente

        })
        return filtro.forEach(nombre => {
            console.log(`El nombre del paciente es: ${nombre.getNombre()}, su edad es: ${nombre.getEdad()}, su rut es:
            ${nombre.getRut()} y su diagnostico es ${nombre.getDiagnostico()}`)
        })
    }

    paciente1 = new Paciente('Jose', 22, '123456789-1', 'Covid-19');
    paciente2 = new Paciente('Ceristp', 33, '16901202-0', 'Hipertiroidismo');
    paciente3 = new Paciente('Consuelo', 34, '987654321-2', 'Covid-19');
    paciente4 = new Paciente('Salvador', 48, '123456789-3', 'Ulcera');
    paciente5 = new Paciente('Carolina', 45, '987654321-4', 'Rinocitis');
    paciente6 = new Paciente('Jorge', 34, '123456789-5', 'Artritis');


    consultorio1 = new Consultorio('Consultorio de Ceristp', [paciente1, paciente2, paciente3, paciente4, paciente5]);

    consultorio1.agregarPaciente(paciente6);

    consultorio1.mostrarPacientes();
    console.log('Los nombres filtrados son:')
    consultorio1.filtrarPorNombre('Ceristp')
});