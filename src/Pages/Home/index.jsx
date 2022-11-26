import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Form from "../../Components/Form";
import Movies from "../../Components/Movies";
import { useSelector } from "react-redux";
import Searched from "../../Components/Searched";
const Home = () => {
  const searchControl = useSelector((state) => state.searchmovies.control);
  const [control, setControl] = useState(false);

  useEffect(() => {
    setControl(searchControl);
  }, [searchControl]);

  return (
    <>
      <Flex flexDirection="column">
        <Form />
        {!control ? <Movies /> : <Searched />}
      </Flex>
    </>
  );
};

export default Home;
