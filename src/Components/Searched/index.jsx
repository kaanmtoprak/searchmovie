import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import SingleMovie from "../SingleMovie";
import { changePending } from "../../Redux/Slices/searchSlice";

const Searched = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchmovies.items);
  const searchError = useSelector((state) => state.searchmovies.error);
  const searchPending = useSelector((state) => state.searchmovies.pending);

  if (searchPending) {
  }

  return (
    <>
      <Container maxW="7xl" mt={10}>
        <Flex mb="5" justifyContent="space-between" alignItems="center">
          <Text fontSize="25px" fontWeight="500">
            Searched Movies
          </Text>
          <Button colorScheme="red" onClick={() => dispatch(changePending())}>
            Turn Back
          </Button>
        </Flex>
        <Divider mb="5" />
        {searchError ? (
          <div>{searchError}</div>
        ) : (
          <Grid
            templateColumns={
              isLargerThan1280
                ? "repeat(4, 1fr)"
                : isLargerThan900
                ? "repeat(3, 1fr)"
                : isLargerThan768
                ? "repeat(3, 1fr)"
                : "repeat(2, 1fr)"
            }
            gap={3}
          >
            {searchResults.results?.map((result) => (
              <SingleMovie key={result.id} result={result} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Searched;
