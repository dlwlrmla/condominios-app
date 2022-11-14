const express = require('express')
const app = express()

let casas = [
    {
      id: 1,
      usuarios: 'ajskaosa'
      
    },
    {
      id: 2,
      usuarios: 'ajskaosa'
    },
    {
      id: 3,
      usuarios: 'ajskaosa'
    }
  ]


  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/casas', (request, response) => {
    response.json(casas)
  })

  app.get('/api/casas/:id', (request, response) => {
    const id =  request.params.id
    const casa = casas.find(casa => casa.id === Number(id))
    if(casa) response.json(casa)
    else response.status(404).end()
  })

app.delete('api/casas/:id', (request, response) => {
    const id = Number(request.params.id)
    const casa = casas.find(casa => casa.id === id)
    if(casa){
        casas =  casas.filter(casa => casa.id !== id)
        response.json(casas)
    } 

    else response.status(404).end()
})
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })