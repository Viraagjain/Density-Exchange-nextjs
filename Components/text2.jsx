import { Box, Flex, Text } from "@chakra-ui/react";

const Text2Message = () => {
  return (
    <div>
      <Flex
        flexDir={["column", "column", "row"]} // Stack on small screens and use row layout on larger screens
        width={["95%", "90%", "60%"]} // Adjust the width for responsiveness
        margin="auto"
        justifyContent={["center", "center", "space-between"]} // Center on small screens and distribute content on larger screens
        mt={["40px", "55px", "70px"]} // Adjust margin-top for responsiveness
        padding={["20px", "20px", "10px"]} // Adjust padding for responsiveness
      >
        <Box w={["100%", "100%", "30%"]}> {/* Adjust width based on screen size */}
          <Text
            fontSize={["2xl", "2xl", "4xl"]} // Adjust font size for responsiveness
            textAlign={["center", "center", "start"]} // Center text on small screens, align to the start on larger screens
            color="black"
            fontWeight="bold"
          >
            Be the best you with EQ
          </Text>
        </Box>

        <Box w={["100%", "100%", "30%"]}> {/* Adjust width based on screen size */}
          <Text
            fontSize={["2xl", "2xl", "4xl"]} // Adjust font size for responsiveness
            textAlign={["center", "center", "start"]} // Center text on small screens, align to the start on larger screens
            color="black"
            fontWeight="bold"
          >
            with EQ
          </Text>
        </Box>

        <Box w={["100%", "100%", "30%"]} fontSize={["lg", "lg", "xl"]} textAlign={["center", "center", "start"]} color="#0d0c22">
          Not having your own emotions under control might be holding you back.
        </Box>

        <Box w={["100%", "100%", "30%"]} fontSize={["lg", "lg", "xl"]} textAlign={["center", "center", "start"]} color="#0d0c22">
          Not having your own emotions under control might be holding you back.
        </Box>
      </Flex>
    </div>
  );
};

export default Text2Message;

