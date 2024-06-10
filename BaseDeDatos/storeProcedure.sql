go
alter procedure asistenciasEnCurso
@estado bit
as
begin
select Paciente.Nombre, Paciente.Apellido 
from Caso 
inner join Paciente on Caso.IdPaciente = Paciente.IdPaciente
where Caso.EnCurso = @estado
end
go
exec asistenciasEnCurso true


go
alter procedure procesoPaciente
@paciente int
as
begin
select InformeDia.Fecha, InformeDia.Descripcion 
from Caso 
inner join InformeDia on Caso.IdCaso = InformeDia.IdCaso
inner join Paciente on Caso.IdPaciente = Paciente.IdPaciente
where Paciente.IdPaciente = @paciente
end
go
exec procesoPaciente 5


go
alter procedure datosPacienteYMedico
@pacienteId int
as
begin
select Paciente.Nombre, Paciente.Apellido, Paciente.Dni, Paciente.Direccion, Paciente.Telefono, Paciente.FechaNacimiento, Prestador. Nombre as "Nombre Medico", Prestador.Apellido as "Apellido Medico", Prestador.Dni as "Dni Medico", Prestador.Telefono as "Telefono Medico", Prestador.Email as "Email Medico"
from Caso 
inner join Paciente on Caso.IdPaciente = Paciente.IdPaciente
inner join Prestador on Caso.IdPrestador = Prestador.IdPrestador

where Paciente.IdPaciente = @pacienteID
end
go
exec datosPacienteYMedico 7


