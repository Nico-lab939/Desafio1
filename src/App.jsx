import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const perros = [
    {
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop',
      name: 'Bartolo',
      description: 'Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!',
      tagText: 'Husky',
      tagColor: 'bg-success'
    },
    {
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop',
      name: 'Messi',
      description: 'Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!',
      tagText: 'Bobtail',
      tagColor: 'bg-primary'
    },
    {
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      name: 'Gohan',
      description: 'Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!',
      tagText: 'Shar Pei',
      tagColor: 'bg-danger'
    },
    {
      image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=300&fit=crop',
      name: 'Princesa',
      description: 'Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!',
      tagText: 'Beagle',
      tagColor: 'bg-warning'
    }
  ];

  return (
    <div className="app">
      <Header title="Adopta un perrito" />
      <main className="main-content">
        <div className="cards-container">
          {perros.map((perro, index) => (
            <MyCard
              key={index}
              image={perro.image}
              name={perro.name}
              description={perro.description}
              tagText={perro.tagText}
              tagColor={perro.tagColor}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
