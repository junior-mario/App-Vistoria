// src/NetlifyTest.tsx

function NetlifyTest() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f0f8ff',
    color: '#002a5c'
  };

  const boxStyle = {
    border: '2px solid #0056b3',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center' as 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>🚀 Deploy no Netlify ✅</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          Se você está vendo esta página, seu projeto React foi implantado com sucesso!
        </p>
        <p>O próximo passo será configurar as Netlify Functions.</p>
      </div>
    </div>
  );
}

export default NetlifyTest;
