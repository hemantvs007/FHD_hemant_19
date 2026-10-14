
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const navStyle = {
    display: 'flex',
    backgroundColor: 'navy',
    color: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    fontSize: '24px'
  };

  const linkStyle = {
    cursor: 'pointer'
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: 'bold' }}>MyApp</div>

      <div style={{ display: 'flex', gap: '25px' }}>
        <span
          onClick={() => navigate('/')}
          style={linkStyle}
        >
          Home
        </span>

        <span
          onClick={() => navigate('/products')}
          style={linkStyle}
        >
          Product
        </span>

        <span
          onClick={() => navigate('/about')}
          style={linkStyle}
        >
          About
        </span>

        <span
          onClick={() => navigate('/cart')}
          style={linkStyle}
        >
          Cart
        </span>
      </div>
    </nav>
  );
}

export default Header;
