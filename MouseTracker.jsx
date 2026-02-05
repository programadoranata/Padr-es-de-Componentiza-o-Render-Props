import { useState, useEffect } from 'react';

export default function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Ele retorna o resultado da função 'render' passando o estado atual
  return (
    <div style={{ height: '100vh' }}>
      {render(position)}
    </div>
  );
}
