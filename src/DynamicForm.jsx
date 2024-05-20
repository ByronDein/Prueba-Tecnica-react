import { useState } from 'react';
import { createTheme, ThemeProvider, TextField, Radio, FormControlLabel, FormControl, FormLabel, Button, Box, Typography, Divider, RadioGroup, List,ListItem,ListItemText } from '@mui/material';
import PropTypes from 'prop-types';


export default function DynamicForm({ formJson }) {
  const initialState = formJson.data.reduce((acc, field) => {
    acc[field.name] = field.value || '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [showResponses, setShowResponses] = useState(false); 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); 
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
  };


  const handleConfirm = () => { 
    setShowResponses(true);
  };

  const theme = createTheme({
    palette: {
      japaneseIndigo: {
        main: '#5A5F0F',
      },
      purple: {
        main: '#673bb7',
      },
    },
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 3,
        mx: 'auto',
        px: 2,
        py: 4,
        minWidth: '800px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Formulario de Satisfacción
      </Typography>

      <ThemeProvider theme={theme}>
        <Typography variant="h5" gutterBottom sx={{ backgroundColor: theme.palette.purple.main, color: 'white', alignSelf: 'flex-start', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', p: 1, mb: '0px' }}>
          Sección 1 de 3
        </Typography>
      </ThemeProvider>
      <Box sx={{
        border: '1px solid #ccc',
        boxShadow: 3,
        backgroundColor: 'white',
        width: '100%',
        px: 2,
        py: 4,
        mb: 3
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'black', alignSelf: 'flex-start' }}>
          Datos Personales
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {formJson.data.slice(0, 4).map((field, index) => (
          <Box key={index} mb={2} width="100%">
            <TextField
              fullWidth
              label={field.label}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.isRequired}
              disabled={field.disabled}
              type={field.type === 'TextEmail' ? 'email' : 'TextInput'}
              margin="dense"
              variant="outlined"
            />
          </Box>
        ))}
      </Box>

      <ThemeProvider theme={theme}>
        <Typography variant="h5" gutterBottom sx={{ backgroundColor: theme.palette.purple.main, color: 'white', alignSelf: 'flex-start', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', p: 1, mb: '0px' }}>
          Sección 2 de 3
        </Typography>
      </ThemeProvider>
      <Box sx={{
        border: '1px solid #ccc',
        boxShadow: 3,
        backgroundColor: 'white',
        width: '100%',
        px: 2,
        py: 4,
        mb: 3
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'black', alignSelf: 'flex-start' }}>
          Preguntas de Satisfacción Siendo 1 el más bajo y 5 el más alto
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {formJson.data.slice(4, 6).map((field, index) => (
          <Box key={index} mb={2} width="100%">
            <FormControl component="fieldset" required={field.isRequired} margin="dense">
              <FormLabel component="legend">{field.label}</FormLabel>
              <RadioGroup
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                row
              >
                <Box sx={{ textAlign: 'center', mr:15 }}>
                  <p>No Satisfecho</p>
                </Box>
                {field.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
                <Box sx={{ textAlign: 'center', ml:20, }}>
                  <p>Muy Satisfecho</p>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
        ))}
      </Box>

      <ThemeProvider theme={theme}>
        <Typography variant="h5" gutterBottom sx={{ backgroundColor: theme.palette.purple.main, color: 'white', alignSelf: 'flex-start', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', p: 1, mb: '0px' }}>
          Sección 3 de 3
        </Typography>
      </ThemeProvider>
      <Box sx={{
        border: '1px solid #ccc',
        boxShadow: 3,
        backgroundColor: 'white',
        width: '100%',
        px: 2,
        py: 4,
        mb: 3
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'black', alignSelf: 'flex-start' }}>
          Comentarios
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <TextField
          fullWidth
          label="Comentarios"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
          multiline
          rows={4}
          margin="dense"
          variant="outlined"
        />
      </Box>

      {!isFormSubmitted && (
        <Button type="submit" variant="contained" color="primary">
          Enviar respuestas
        </Button>
      )}

      {isFormSubmitted && (
        <Button variant="contained" color="secondary" onClick={handleConfirm}>
          Revisar Respuestas
        </Button>
      )}

{showResponses && (
  <Box sx={{ mt: 3 }}>
    <Typography variant="h6" gutterBottom>
      Respuestas del formulario:
    </Typography>
    <List>
      {Object.entries(formData).map(([key, value], index) => (
        <ListItem key={index}>
          <ListItemText
            primary={key}
            secondary={value}
            primaryTypographyProps={{ fontWeight: 'bold', color: 'primary.main' }}
            secondaryTypographyProps={{ color: 'secondary.main' }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
)}
    </Box>
  );
}

DynamicForm.propTypes = {
  formJson: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isRequired: PropTypes.bool.isRequired,
        disabled: PropTypes.bool.isRequired,
        type: PropTypes.oneOf(['TextInput', 'TextEmail', 'Textarea', 'RadioGroup']).isRequired,
        value: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
          })
        ),
      })
    ).isRequired,
  }).isRequired,
};