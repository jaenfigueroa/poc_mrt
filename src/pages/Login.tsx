import { useContext } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import useForm from '../hook/useForm'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: '',
  password: '',
}

const Login = () => {
  const { setIsLogged } = useContext(AppContext)
  const navigate = useNavigate()

  const { values, handleChange } = useForm(initialValues)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data submitted:', values)
    setIsLogged(true)
    navigate('/admin')
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{ width: '100%', maxWidth: '300px', margin: 'auto' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'calc(100vh - 64px)'}
        >
          <Avatar style={{ width: 130, height: 130, marginBottom: '15px' }} />
          <Box component={'form'} onSubmit={handleSubmit}>
            <TextField
              id='email'
              label='Correo electrónico'
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              margin='normal'
              fullWidth
              autoComplete='email'
              size='medium'
            />
            <TextField
              id='password'
              label='Contraseña'
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              fullWidth
              autoComplete='current-password'
              size='medium'
            />

            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ padding: 10, width: '100%', marginTop: 10 }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
