import styled from "styled-components";

const StyleBanner = styled.section`
  text-align: center;
  padding: 50px 0;
  background-image: url("banner.jpg");
  background-size: cover;
  color: #000000;
`;

const StyleAbout = styled.section`
  width: 80%;
  margin: auto;
`;

export default function HomePage() {
  return (
    <div>
      <StyleBanner>
        <h1>Bienvenido a Restaurante React</h1>
        <p>Disfruta de nuestra exquisita cocina y ambiente acogedor</p>
        <a href="#" className="btn">
          Ver Menú
        </a>
      </StyleBanner>

      <StyleAbout>
        <h2>Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          consectetur dui. Nulla facilisi. Duis non aliquet eros. Integer
          hendrerit urna sit amet leo volutpat, ac tristique odio molestie.
        </p>
      </StyleAbout>

      <StyleAbout className="container">
        <h2>Nuestro Menú</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="plato1.jpg" alt="Plato 1" />
            <h3>Nombre del Plato 1</h3>
            <p>Descripción breve del plato.</p>
          </div>
          <div className="menu-item">
            <img src="plato2.jpg" alt="Plato 2" />
            <h3>Nombre del Plato 2</h3>
            <p>Descripción breve del plato.</p>
          </div>
        </div>
      </StyleAbout>

      <StyleAbout>
        <h2>Contacto</h2>
        <p>Estamos ubicados en:</p>
        <address>123 Calle Principal, Ciudad, País</address>
        <p>Teléfono: (123) 456-7890</p>
        <p>Email: info@restaurantereact.com</p>
      </StyleAbout>
    </div>
  );
}
