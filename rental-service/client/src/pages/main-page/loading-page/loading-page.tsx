function LoadingPage() {
  const spinAnimation = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div className="page page--gray page--main">
      <style>{spinAnimation}</style>
      <main className="page__main page__main--index">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 100px)',
          gap: '20px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #f0f0f0',
            borderTopColor: '#4481c3',
            borderRadius: '50%',
            animation: 'spin 1s ease-in-out infinite'
          }}></div>
          <span style={{
            color: '#4481c3',
            fontSize: '18px',
            fontWeight: '500'
          }}>
            Loading ...
          </span>
        </div>
      </main>
    </div>
  );
}

export { LoadingPage };