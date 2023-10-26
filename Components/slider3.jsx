import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const Slider3 = () => {
  const animationRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (animationRef.current) {
        const rect = animationRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight * 0.9 && rect.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <Box
        bgColor={"#EDF8FE"}
        width={["95%", "85%", "60%"]}
        m={"auto"}
        textAlign={"center"}
        mt={["20px", "35px", "55px"]}
        className={`slide-in ${animate ? "active" : ""}`}
        p={["20px", "60px", "85px"]}
        borderRadius={"10px"}
      >
        <Text mt={["20px", "30px", "40px"]} mb={["10px", "20px", "30px"]}>
          Let your friends, family, and co-workers (anonymously) rate your social skills.
        </Text>
        <Heading mb={["20px", "30px", "40px"]}>Ever wonder what others think of you?</Heading>
        <Image
          src="/Images/img3.png"
          alt="img3"
          m={"auto"}
          className={`fade-in ${animate ? "active" : ""}`}
          ref={animationRef}
        />
        <Flex m={"auto"} justifyContent="space-between" flexWrap="wrap" mt={["10px", "20px", "30px"]}>
          <Text width={["100%", "45%", "30%"]} fontSize={["sm", "md", "lg"]} mb={["10px", "0"]}>
            Answer questions about your social skills
          </Text>
          <Text width={["100%", "45%", "30%"]} fontSize={["sm", "md", "lg"]} mb={["10px", "0"]}>
            Let others anonymously answer the same questions about you
          </Text>
          <Text width={["100%", "45%", "30%"]} fontSize={["sm", "md", "lg"]}>
            Find out where you and others see things the same way and where not!
          </Text>
        </Flex>
        <Box
          width={["100%", "80%"]}
          bgColor={"white"}
          borderRadius={["0px", "10px"]}
          m={"auto"}
          mt={["20px", "40px"]}
          p={["20px", "40px"]}
        >
          <Flex justifyContent="space-between" flexWrap="wrap" mb={["20px", "40px"]}>
            <Box
              bgColor={"#6341EF"}
              color={"white"}
              p={"9px"}
              borderRadius={"7px"}
              pl={"11px"}
              pr={"11px"}
              mb={["10px", "0"]}
              className={animate ? "slide-in" : ""}
              ref={animationRef}
            >
              You
            </Box>
            <Box
              bgColor={"#FCB237"}
              color={"white"}
              p={"9px"}
              borderRadius={"7px"}
              pl={"11px"}
              pr={"11px"}
              className={animate ? "slide-in" : ""}
              ref={animationRef}
            >
              Anonymous2
            </Box>
          </Flex>

          <Image
            src="/Images/img4.png"
            alt="img4"
            className={`fade-in ${animate ? "active" : ""}`}
          />

          <Flex justifyContent="space-between" flexWrap="wrap">
            <Box
              bgColor={"#41C4FA"}
              color={"white"}
              p={"9px"}
              borderRadius={"7px"}
              pl={"11px"}
              pr={"11px"}
              mb={["10px", "0"]}
              className={animate ? "slide-in" : ""}
              ref={animationRef}
            >
              Anonymous1
            </Box>
            <Box
              bgColor={"#58C896"}
              color={"white"}
              p={"9px"}
              borderRadius={"7px"}
              pl={"11px"}
              pr={"11px"}
              className={animate ? "slide-in" : ""}
              ref={animationRef}
            >
              Anonymous3
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Slider3;

