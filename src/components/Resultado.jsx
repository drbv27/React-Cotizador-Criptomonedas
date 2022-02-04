import styled from "@emotion/styled";

const ContenedorRes = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
const Imagen = styled.img`
  display: block;
  width: 25%;
`;
const Texto = styled.p`
  font-size: 1.1rem;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 1.5rem;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  console.log(resultado);
  return (
    <ContenedorRes>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagencripto"
      />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Porcentaje de variación 24H: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </ContenedorRes>
  );
};

export default Resultado;
