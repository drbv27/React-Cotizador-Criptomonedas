import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.5rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [SelectMonedas] = useSelectMonedas("Elige tu Moneda");
  const [SelectCriptoMonedas] = useSelectMonedas("Elige tu CriptoMoneda");

  return (
    <form>
      <SelectMonedas />
      <SelectCriptoMonedas />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
