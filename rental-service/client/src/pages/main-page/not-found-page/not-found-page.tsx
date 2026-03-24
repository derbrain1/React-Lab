import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';


function NotFoundPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      gap: '20px'
    }}>
      <h1>PAGE NOT FOUND</h1>
      <Link to={AppRoute.Main}>Перейдите на главную страницу</Link>
    </div>
  );
}

export { NotFoundPage };