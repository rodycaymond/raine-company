import { Box, Flex, Heading } from "@radix-ui/themes";

export const About: React.FC = () => {
  return (
    <Box style={{ flexGrow: 1, padding: "24px 0" }}>
      <Heading align="center">Meet the Family</Heading>
      <Box className="section">
        <Flex direction="row" wrap="wrap" justify="center" align="center">
          <img src="/clarks_tall.JPG" style={{ maxWidth: "380px" }} />
          <Box style={{ textAlign: "center", margin: "18px" }}>
            We are the Clark family, and proud owners of Raine Company. Our
            beautiful children from front left to right are Jayden, Liam, and
            Noah. And that's us in the back, Gavin and Vanessa Clark. Our family
            loves the outdoors, and frequently go camping, as well as
            off-roading in side-by-sides or dirt bikes. We like to enjoy the
            pool on those hot summer days, and relaxing at home on the couch
            with a good movie on those lazy days. We grew up in and around the
            Smyrna Tennessee area, and know it like that back of our hands.
            <br />
            We founded this company because we simply love what we do. Our
            children are involved every step of the way, learning and growing as
            our family and company learns and grows. As native Tennesseans, we
            proudly serve our local communities and beyond. Building our
            company, and family, has always been the dream, so we take great
            pride in the work we do and how far we have come.
            <br />
            We work for you like we would work for ourselves, quality and
            craftsmanship in mind. If you're looking for some home rennovations
            that truly feel like home, please give us a call so we can help your
            dream projects come true!
            <br />
            <br />
            From our Family to Yours,
            <br />
            <br />
            The Clarks
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
