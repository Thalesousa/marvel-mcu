import { CardContainer, CardInfo } from './styles';

type CardItemProps = {
  value: {
    name: string;
    description: string;
    thumbnail: string;
  };
}

export default function CardItem({value}: CardItemProps) {
  return (
    <CardContainer>
      <img src={value.thumbnail} alt={value.name} />

      <CardInfo>
        <h2>{value.name}</h2>

        <p>{value.description}</p>

        <a href="/">Ver detalhes</a>
      </CardInfo>
    </CardContainer>
  )
}