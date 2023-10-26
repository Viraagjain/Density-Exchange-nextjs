// import { Box, Flex } from "@chakra-ui/react";
// const EQ = () => {
//   return (
//     <div>
//       <Flex
//         width={"60%"}
//         margin={"auto"}
//         justifyContent={"space-evenly"}
//         mt={"55px"}
//       >
//         <Box
//           w={"30%"}
//           fontSize={"25px"}
//           textAlign={"start"}
//           color={"black"}
//           fontWeight={"bold"}
//         >
//           EQ beats IQ
//         </Box>

//         <Box w={"30%"} fontSize={"17px"} textAlign={"start"} color={"#0d0c22"}>
//           People with heigh emotional intelligence (EQ) live more fulfilled
//           lives. They tend to be happier and have healthier relationships.
//         </Box>

//         <Box w={"30%"} fontSize={"17px"} textAlign={"start"} color={"#0d0c22"}>
//           They are more successful in their pursuits and make for inspiring
//           leaders. According to science, they earn $29k a year.
//         </Box>
//       </Flex>
//     </div>
//   );
// };

// export default EQ;
import { Box, Flex } from "@chakra-ui/react";

const EQ = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      justify="center"
      align="center"
      width="100%"
      mt={["55px", "55px", "0"]}
    >
      <Box
        w={["100%", "100%", "30%"]}
        fontSize={["25px", "25px", "30px"]}
        textAlign={["center", "center", "start"]}
        color="black"
        fontWeight="bold"
      >
        EQ beats IQ
      </Box>

      <Box
        w={["100%", "100%", "30%"]}
        fontSize={["17px", "17px", "17px"]}
        textAlign={["center", "center", "start"]}
        color="#0d0c22"
        mt={["20px", "20px", "0"]}
      >
        People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
      </Box>

      <Box
        w={["100%", "100%", "30%"]}
        fontSize={["17px", "17px", "17px"]}
        textAlign={["center", "center", "start"]}
        color="#0d0c22"
        mt={["20px", "20px", "0"]}
      >
        They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
      </Box>
    </Flex>
  );
};

export default EQ;

