import { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, Context } from "./styles";

type CardInfoProps = {
  name: string;
  description: string;
  thumbnail: string;
}

export default function HQs() {
  const [hqs, setHqs] = useState<CardInfoProps[]>([]);

  useEffect(() => {
    const getValues = async () => {
      const { data } = await api.get(`HQs`)
      setHqs(data);
    }

    getValues()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Context>
          <CardList value={hqs}/>
        </Context>
      </Container>
    </>
  )
}