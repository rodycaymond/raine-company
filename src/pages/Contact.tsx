import { CopyIcon } from "@radix-ui/react-icons";
import {
  Box,
  DataList,
  Flex,
  Heading,
  IconButton,
  Link,
} from "@radix-ui/themes";

export const Contact: React.FC = () => {
  return (
    <Box style={{ flexGrow: 1, padding: "24px 0" }}>
      <Heading align="center">Contact and Hours</Heading>
      <Flex className="section" direction="column" align="center">
        <DataList.Root>
          <DataList.Item align="center">
            <DataList.Label minWidth="88px">Phone</DataList.Label>
            <DataList.Value>
              <Link href="tel:615-691-1884">(615) 691-1884</Link>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Email</DataList.Label>
            <DataList.Value>
              <Flex align="center" gap="2">
                rainecomp23@outlook.com
                <IconButton
                  size="1"
                  aria-label="copy email"
                  color="gray"
                  variant="ghost"
                >
                  <CopyIcon />
                </IconButton>
              </Flex>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Hours</DataList.Label>
            <DataList.Value>7am - 5pm | Monday - Saturday</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Service Area</DataList.Label>
            <DataList.Value>Middle Tennessee</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Flex>
    </Box>
  );
};
