import { Text, Box, Flex, Image, Heading, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Slider2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: ["1", "2"],
    ml: ["-1", "-2.5"],
    fontSize: ["xs", "sm"],
  };

  return (
    <div>
      <Box width={["95%", "80%", "60%"]} margin="auto" mb={["20px", "30px", "40px"]} position="relative" mt={["40px", "55px", "70px"]}>
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
          {() => (
            <Flex alignItems="center" flexDir={["column", "row"]} gap={["10px", "23px"]}>
              <motion.div
                initial={{ opacity: 0, y: [-100, -50] }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : [-50, -100],
                }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative", left: 0 }}
              >
                <Text fontSize={["lg", "xl"]} fontWeight="bold">
                  Wrong with self-improvement & how we are fixing it.
                </Text>
                <Heading fontSize={["2xl", "4xl"]}>Self-Improvement. Ugh.</Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: [100, 50] }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : [50, 100],
                }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative", left: isVisible ? 0 : [50, 100] }}
              >
                <Image src="/Images/img2.png" alt="img1" height={["40px", "60px"]} width={["40px", "50px"]} />
              </motion.div>
            </Flex>
          )}
        </VisibilitySensor>
      </Box>

      <Flex flexDir={["column", "row"]} width={["95%", "80%", "70%"]} margin="auto" mt={["40px", "60px"]} justifyContent="space-between" gap={["20px", "30px"]}>
        <Box pt={["4", "6"]} pb={["2", "4"]} border={["1px solid blue", "2px solid blue"]}>
          <Slider aria-label="slider-ex-6" onChange={(val) => setSliderValue(val)}>
            <SliderMark value={25} {...labelStyles}>
              25%
            </SliderMark>
            <SliderMark value={50} {...labelStyles}>
              50%
            </SliderMark>
            <SliderMark value={75} {...labelStyles}>
              75%
            </SliderMark>
            <SliderMark value={sliderValue} textAlign="center" bg="blue.500" color="white" mt={["-6", "-10"]} ml={["-3", "-5"]} w={["10", "12"]}>
              {sliderValue}%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <Flex flexDir="column" width={["100%", "60%"]}>
          <Box mt={["40px", "70px"]}>
            <Text color="black" fontSize={["xl", "2xl"]} fontWeight="bold" mb={["10px", "13px"]}>
              It's not as easy as 1-2-3
            </Text>
            <Text>
              The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
            </Text>
          </Box>

          <Box mt={["40px", "70px"]}>
            <Text color="black" fontSize={["xl", "2xl"]} fontWeight="bold" mb={["10px", "13px"]}>
              It's not as easy as 1-2-3
            </Text>
            <Text>
              The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
            </Text>
          </Box>

          <Box mt={["40px", "70px"]}>
            <Text color="black" fontSize={["xl", "2xl"]} fontWeight="bold" mb={["10px", "13px"]}>
              It's not as easy as 1-2-3
            </Text>
            <Text>
              The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
            </Text>
          </Box>

          <Box mt={["40px", "70px"]}>
            <Text color="black" fontSize={["xl", "2xl"]} fontWeight="bold" mb={["10px", "13px"]}>
              It's not as easy as 1-2-3
            </Text>
            <Text>
              The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
            </Text>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Slider2;

