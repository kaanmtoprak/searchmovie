import { useEffect } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Text,
  useMediaQuery,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import {
  getPopulerDayMoviesAsync,
  getPopulerWeekMoviesAsync,
} from "../../Redux/services";
import SingleMovie from "../SingleMovie";

const Movies = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();
  const weekResults = useSelector((state) => state.popmovies.week.items);
  const weekIsLoading = useSelector((state) => state.popmovies.week.isLoading);
  const weekError = useSelector((state) => state.popmovies.week.error);
  const dayResults = useSelector((state) => state.popmovies.day.items);

  const dayError = useSelector((state) => state.popmovies.day.error);
  useEffect(() => {
    dispatch(getPopulerWeekMoviesAsync());
    dispatch(getPopulerDayMoviesAsync());
  }, [dispatch]);

  return (
    <>
      <Container maxW="7xl" mt={10}>
        <Box>
          <Text fontSize="25px" fontWeight="500">
            Popular Movies
          </Text>
        </Box>
        <Divider mb="5" />
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Popular Today</Tab>
            <Tab>Popular This Week</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {dayError ? (
                <div>{dayError}</div>
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
                  {dayResults.results?.map((result) => (
                    <SingleMovie key={result.id} result={result} />
                  ))}
                </Grid>
              )}
            </TabPanel>
            <TabPanel>
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
                {!weekIsLoading ? (
                  weekResults.results.map((result) => (
                    <SingleMovie key={result.id} result={result} />
                  ))
                ) : weekIsLoading ? (
                  <Container maxW="7xl" mt={10}>
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Container>
                ) : (
                  weekError && <>{weekError}</>
                )}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};

export default Movies;
