import { Center, Text } from "@chakra-ui/react";

import { Link } from "components/Misc";

const Footer = () => {
  return (
    <Center as="footer" py={4} mt={4}>
      <Text>
        {"Made with "}
        <span role="img" aria-label="love">
          ❤️
        </span>
        {" by "}
        <Link href="https://jeremynguyen.dev/" isExternal color="purple.500">
          Jeremy Nguyen
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
