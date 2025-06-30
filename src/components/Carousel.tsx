import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import type { HandyWork } from "../constants/ constants";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { AspectRatio } from "radix-ui";

interface CarouselProps {
  items: HandyWork[];
}

type direction = "left" | "right";

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [transform, setTransform] = useState<number>(0);

  const handleTransform = (direction: direction) => {
    if (direction === "right" && transform !== items.length - 1) {
      setTransform((prev) => prev + 1);
    }
    if (direction === "left" && transform !== 0) {
      setTransform((prev) => prev - 1);
    }
  };
  return (
    <>
      <Box
        width={{ xs: "100%", sm: "80%", md: "60%" }}
        style={{ overflow: "hidden", margin: "auto" }}
      >
        <Flex
          width={`${100 * items.length}%`}
          style={{
            transform: `translateX(-${(transform / items.length) * 100}%)`,
          }}
          className="transform-animate"
        >
          {[...items].map((so, i) => {
            return (
              <Box
                width={`${(1 / items.length) * 100}%`}
                className={`${
                  transform !== i
                    ? "full-opacity-animate"
                    : "no-opacity-animate"
                }`}
              >
                <Text align="center">{so.title}</Text>
                <AspectRatio.Root ratio={16 / 9}>
                  <img src={so.image} style={{ maxWidth: "100%" }} />
                </AspectRatio.Root>
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Flex
        style={{
          justifyContent: "center",
          marginTop: "18px",
          cursor: "pointer",
        }}
        gap="64px"
      >
        <IconButton
          variant="outline"
          onClick={() => handleTransform("left")}
          disabled={transform === 0}
          color="blue"
        >
          <CaretLeftIcon cursor="pointer" />
        </IconButton>
        <IconButton
          disabled={transform === items.length - 1}
          variant="outline"
          color="blue"
        >
          <CaretRightIcon
            onClick={() => handleTransform("right")}
            cursor="pointer"
          />
        </IconButton>
      </Flex>
    </>
  );
};
