
import DynamicForm from './DynamicForm';
import { Container } from '@mui/material';

const formJson = {
  data: [
    {
      label: 'Nombres',
      name: 'nombres',
      isRequired: true,
      disabled: false,
      type: 'TextInput',
      value: '',
    },
    {
      label: 'Apellidos',
      name: 'apellidos',
      isRequired: true,
      disabled: false,
      type: 'TextInput',
      value: '',
    },
    {
      label: 'Correo Electrónico',
      name: 'email',
      isRequired: true,
      disabled: false,
      type: 'TextEmail',
      value: '',
    },
    {
      label: 'Teléfono',
      name: 'Telefono',
      isRequired: true,
      disabled: false,
      type: 'TextInput',
      value: '',
    },
    {
      label: 'Nivel de satisfacción con el evento',
      name: 'Satisfaccón con el evento',
      isRequired: true,
      disabled: false,
      type: 'RadioGroup',
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
      ],
      value: '',
    },
    {
      label: '¿Qué tan útil fue el contenido del evento?',
      name: 'Utilidad',
      isRequired: true,
      disabled: false,
      type: 'RadioGroup',
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
      ],
      value: '',
    },
    {
      label: 'Comentarios',
      name: 'Comentarios',
      isRequired: true,
      disabled: false,
      type: 'Textarea',
      value: '',
    },
  ],
};

function App() {
  return (
   
    <Container  sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center',
  backgroundColor: '#ebebe6',
  minWidth: '800px', 
}}>
  <DynamicForm formJson={formJson} />
</Container>
  );
}

export default App;
