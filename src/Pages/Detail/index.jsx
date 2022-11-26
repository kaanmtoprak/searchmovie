import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailMoviesAsync } from "../../Redux/services";
import { useSelector, useDispatch } from "react-redux";
import {
  Badge,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import style from "./style.module.css";
import notFound from "../../Images/not-found.jpg";

const Detail = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailResults = useSelector((state) => state.detailmovies.items);
  const detailIsLoading = useSelector((state) => state.detailmovies.isLoading);
  const poster_url = `https://image.tmdb.org/t/p/original/${detailResults.poster_path}`;
  const image_url = `https://image.tmdb.org/t/p/original/${detailResults.backdrop_path}`;

  useEffect(() => {
    dispatch(getDetailMoviesAsync(id));
  }, [dispatch, id]);

  console.log(detailIsLoading);

  return (
    <Flex bg="black" zIndex="-2" position="absolute" width="100%" minH="100vh">
      <img width="100%" className={style.backdrop} src={image_url} alt="" />

      <Container mt="10" maxW="8xl">
        <Grid
          templateColumns={
            isLargerThan1280
              ? "repeat(3, 3fr)"
              : isLargerThan900
              ? "repeat(3, 1fr)"
              : isLargerThan768
              ? "repeat(2, 1fr)"
              : "repeat(1, 1fr)"
          }
          gap={16}
        >
          <GridItem>
            <img
              className={style.poster}
              src={detailResults.poster_path !== null ? poster_url : notFound}
              alt=""
            />
          </GridItem>
          <GridItem colSpan={isLargerThan900 ? 2 : 1}>
            <Flex alignItems="center" justifyContent="space-between">
              <Badge mt="1" fontSize="12px">
                {!detailIsLoading ? detailResults.revenue.toLocaleString() : ""}{" "}
                $ Revenue
              </Badge>
              <Text fontSize="12px" color="white">
                Release Date : {detailResults.release_date}
              </Text>
            </Flex>
            <Text fontSize="50px" color="white">
              {detailResults.title}
            </Text>
            <Badge
              mt="1"
              colorScheme={
                detailResults.vote_average >= 7
                  ? "green"
                  : detailResults.vote_average >= 5.5
                  ? "yellow"
                  : "red"
              }
              fontSize="20px"
            >
              10 / {detailResults.vote_average}
            </Badge>
            <Text mt="5" mb="5" fontSize="17px" color="white">
              {detailResults.overview}
            </Text>
            <a
              href={`https://www.imdb.com/title/${detailResults.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
              rel="noreferrer"
              target="_blank"
            >
              <Button>Go to IMDB</Button>
            </a>
            <Flex alignItems="center" mt="5">
              <Text color="white"> Genres:</Text>
              {!detailIsLoading ? (
                detailResults.genres.map((genre) => (
                  <Badge ml="2" key={genre.id}>
                    {genre.name}
                  </Badge>
                ))
              ) : (
                <></>
              )}
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  );
};

export default Detail;
