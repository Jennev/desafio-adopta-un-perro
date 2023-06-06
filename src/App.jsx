import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './components/Header'
import Card from './components/Card'
//import { Tags } from './components/Tags';
import Footer from './components/Footer'




function App() {
  const titulo = "Adopta un Perrito"
  const cards = [
    {
      id: 'perro 0',
      foto: "https://cdn.pixabay.com/photo/2019/01/30/19/52/husky-3965255_1280.jpg",
      nombre: "Bartolo",
      texto: "Lleno de energía y listo para jugar. ¡Dale a Cartolo el hogar amoroso que se merece!",
      raza: "Husky Siberiano",
      color: "success",
    },
    {
      id: 'perro 1',
      foto: "https://cdn.pixabay.com/photo/2015/03/09/16/09/bobtail-665956_1280.jpg",
      nombre: "Messi",
      texto: "Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!",
      raza: "Bobtail Cachorro",
      color: "primary",
    },
    {
      id: 'perro 2',
      foto: "https://cdn.pixabay.com/photo/2020/06/04/01/01/shar-pei-5256832_1280.jpg",
      nombre: "Gohan",
      texto: "Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondiconal!",
      raza: "Shar Pei",
      color: "danger",
    },
    {
      id: 'perro 3',
      foto: "https://cdn.pixabay.com/photo/2021/02/10/19/18/basset-hound-6003265_1280.jpg",
      nombre: "Princesa",
      texto: "Es una compañera lear y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!",
      raza: "Basset Hound",
      color: "warning",
    },
  ]

  return (
    <div className='App'>
      <Header titulo={titulo}></Header>
      <div className="d-flex flex-colum align-item-center mx-auto">

        <div className='container my-4'>
          <div className='card-container'>
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer></Footer>

    </div>




  )
}

export default App
