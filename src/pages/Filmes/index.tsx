import { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, Context, SelectContainer } from "./styles";

type CardInfoProps = {
  name: string;
  description: string;
  thumbnail: string;
}

type ReleaseProps = {
  release: number;
}

type ChronologyProps = {
  chronology: number;
}

export default function Filmes() {
  const [filmes, setFilmes] = useState<CardInfoProps[]>([]);
  const [select, setSelect] = useState('');

  useEffect(() => {
    const getValues = async () => {
      const { data } = await api.get(`Filmes`)
      if (!select.trim()){
        setFilmes(data);
      }

      switch(select){
        case 'release':
          data.sort(function compare(a:ReleaseProps, b:ReleaseProps) {
            if (a.release < b.release) return -1;
            if (a.release > b.release) return 1;
            return 0;
          });
          setFilmes(data);
          break;

        case 'chronology':
          data.sort(function compare(a:ChronologyProps, b:ChronologyProps) {
            if (a.chronology < b.chronology) return -1;
            if (a.chronology > b.chronology) return 1;
            return 0;
          });
          setFilmes(data);
          break;
        default:
          break;
      }
    }

    getValues()
  }, [select])

  return (
    <>
      <Header />
      <Container>
        <Context>
          <SelectContainer>
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
              <option value="">Filtrar por:</option>
              <option value="release">Lançamento</option>
              <option value="chronology">Cronologia</option>
            </select>
          </SelectContainer>
          <CardList value={filmes}/>
        </Context>
      </Container>
    </>
  )
}