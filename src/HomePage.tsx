// src/HomePage.tsx

function HomePage() {
  // Estilos para centralizar e embelezar a página
  const pageStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    background: 'linear-gradient(to right, #000428, #004e92)',
    color: 'white'
  };

  const boxStyle = {
    textAlign: 'center' as 'center',
    padding: '50px',
    border: '1px solid #fff',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: '3rem', margin: '0' }}>🚀 Projeto Reconstruído!</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Seu projeto agora tem a estrutura correta e está pronto para o deploy no Netlify.
        </p>
      </div>
    </div>
  );
}

export default HomePage;