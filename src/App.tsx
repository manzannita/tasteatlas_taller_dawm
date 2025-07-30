import './App.css'
import { useState, useEffect } from 'react'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

// Interfaz creada
import { type Dish } from './interface/Dish'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // Variable de estado y la función de modificación
  const [dishes, setDishes] = useState<Dish[]>([]);

  // Realizar una petición asíncrona a la URL. La respuesta es un JSON.
  // Al recibir la respuesta, actualice la variable de estado.
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(url);
        const data: Dish[] = await response.json();
        setDishes(data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []);


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student 
            apellidos="Sánchez Guzmán"
            nombres="Annabella Noelia" 
            paralelo="2"
          />

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* Envíe la variable de estado como prop */}
          <DishTable data={dishes}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
