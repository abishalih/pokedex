import styled from "styled-components";
import { convertSentenceCase } from "../../../infrastructure/utils/sentenceCase";

type BasicStat = {
    base_stat?: number;
    stat?: {
        name?: string;
        url?: string;
    }
}

type Props = {
    complete?:boolean;
    height?: string;
    stats?: Array<BasicStat>;
    weight?: string;
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 7fr 1fr 5fr;
    grid-gap: 1rem;
    margin: 15px auto;
    width: 75%;
`;

const PokemonStat = ({
    complete = false, 
    height = "",
    stats = [],
    weight = "",
}: Props) => {
  if(complete) return (
    <Wrapper>
        <div>Height</div>
        <div>:</div>
        <div>{height}</div>
        <div>Weight</div>
        <div>:</div>
        <div>{weight}</div>
        {stats.map(({ base_stat, stat })=>(
            <>
                <div>{ convertSentenceCase(stat?.name) }</div>
                <div>:</div>
                <div>{base_stat}</div>
            </>
        ))}
    </Wrapper>
  )
  return null;
}

export default PokemonStat