import Button from "../Button/Button"
import {
  JokeCard,
  RandomJokesWrapper,
  JokeText,
  JokesContainer,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  randomJokesSliceActions,
  randomJokesSliceSelectors,
} from "../../store/redax/randomJokes/randomJokes"
import { v4 } from "uuid"

function RandomJokes() {
  const dispatch = useAppDispatch()
  const randomJoke = useAppSelector(randomJokesSliceSelectors.jokeData)

  console.log(randomJoke)

  const getJoke = () => {
    dispatch(randomJokesSliceActions.getJoke())
  }

  const jokes = randomJoke.data.map((joke: any) => {
    return <JokeText key={v4()}>{`${joke.setup} - ${joke.punchline}`}</JokeText>
  })


  return (
    <RandomJokesWrapper>
      <JokeCard>
        <Button name="Get Joke" onButtonClick={getJoke} />
        <JokesContainer>
            {jokes}
        </JokesContainer>
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes
