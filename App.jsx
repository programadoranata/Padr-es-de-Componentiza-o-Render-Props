import MouseTracker from './MouseTracker';

export default function App() {
  return (
    <div>
      <h1>Desafio Mouse Tracker</h1>

      {/* Instância 1: Exibição Textual */}
      <MouseTracker 
        render={({ x, y }) => (
          <p>Coordenadas atuais - X: {x}, Y: {y}</p>
        )} 
      />

      {/* Instância 2: Elemento Visual (Círculo) */}
      <MouseTracker 
        render={({ x, y }) => (
          <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            left: x - 25,
            top: y - 25,
            width: 50,
            height: 50,
            pointerEvents: 'none' // Evita que o círculo bloqueie o mouse
          }} />
        )} 
      />
    </div>
  );
}
