## Todo List

- Estilizar Stack Navigator
- Organizar Views para usar no Stack Navigator
- Criar uma store com o hook de useReducer()
- Dar dispatch nas informações para o firebase e para a store do app
- Usar o Animated pra animar o app (card, botões, navegação)

## Concepts

### Algoritmo de encontrar pessoas

#### Modo Webnamoro
Quando o usuário começa a usar o sistema, o sistema, o sistema faz um fetch por score, dos scores de pessoas mais próximas ao score do usuário. Isso põe essas pessoas em uma fila que é a fila de filtragem. A prioridade da fila de filtragem é por localização. (Setar número máximo de pessoas na fila)


Todo usuário começa com um score de 0 nas suas informações no banco de dados. A cada vez que ele avalia um anime de 1 à 10, é feita uma média entre todos os animes que ele avaliou. Se a diferença entre o score desse usuário e o score do usuário para quem ele aparecerá for menor ou igual a 1 ele ja é posto na fila de filtragem.

#### Modo Encontro
Quando o usuário começa a usar o sistema, o sistema, o sistema faz um fetch por localização, das pessoas com localizações mais próximas à localização do usuário. Isso põe essas pessoas em uma fila que é a fila de filtragem. A prioridade da fila de filtragem é por localização. (Setar número máximo de pessoas na fila)

Esse algoritmo encontra pessoas próximas via integração com API do google maps/gps. Isso já coloca a pessoa na fila de seleção da outra, mas então é aplicado um filtro nessas pessoas próximas que é o quanto o score dessa pessoa é aproximado do da outra.

### Sessões de Usuário com Firebase Auth + Node.JS

### Modelagem de Dados - Firebase

### API: NodeJS + Firebase Restful

### Guardar arquivos (fotos, audios?, vídeos?) do usuário - Firestore

## Tips
To communicate Parent And Child states in React you should pass a handler function from the Parent to the Child.