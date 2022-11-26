import { Box, Container, Flex, Img } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import style from "./style.module.css";
import logo from "../../Images/logo.png";
import { useDispatch } from "react-redux";
import { getSearchMoviesAsync } from "../../Redux/services";

const Form = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movie);
    dispatch(getSearchMoviesAsync(movie));
    setMovie("");
  };

  return (
    <>
      <Container maxW="5xl">
        <Flex flexDirection="column" alignItems="center">
          <Box mt="10">
            <Img src={logo} />
          </Box>
          <Box mt="10">
            <form onSubmit={handleSubmit}>
              <Flex className={style.input} justifyContent="center">
                <input
                  name="movie"
                  value={movie}
                  onChange={(e) => setMovie(e.target.value)}
                  type="text"
                />
                <button type="submit">
                  <SearchIcon />
                </button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Form;
