import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'
import { MdPermPhoneMsg } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Image from 'next/image'

export default function App ()  {
  return (
    <Box as="section">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
        py="12"
      >
        <Flex
          align="center"
          justify="center"
          direction={{
            base: 'column-reverse',
            md: 'row',
          }}
        >
          <Box
            aria-hidden
            className="spacer"
            flexShrink={0}
            boxSize={{
              base: '10',
              xl: '20',
            }}
          />

          <Box
            flex="1"
            maxW="560px"
            h={{
              base: '400px',
              md: '460px',
            }}
          >
            <Image
              src="/line.png"
              alt="https://lin.ee/sBFIv9V"
              width={500}
              height={500}
            />
          </Box>

          <Box flex="1" maxW="440px">
            <Heading
              size="2xl"
              fontWeight="extrabold"
              color={useColorModeValue('blue.600', 'blue.300')}
            >
              《關網資訊公告》
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'inherit')}
              mt="6"
            >

              <Link href="https://www.einvoice.nat.gov.tw/home/Article!showArticleDetail?articleId=1629437873051" isExternal>
                <b>財政部電子發票平台維護公告</b><ExternalLinkIcon mx="2px" />
              </Link>
              <Text>財政部電子發票平台於 2021/09/08 線路維護</Text>
               <Text>可能造成以下情況：</Text>
              <OrderedList>
                <ListItem><Text>無法取回發票號碼及相關的資訊</Text></ListItem>
                <ListItem><Text>無法作廢發票，無法開立折讓單，無法作廢折讓單</Text></ListItem>
                <ListItem><Text>無法發送email等通知</Text></ListItem>

              </OrderedList>
                <br/>
               <Text>關網工程師會密切注意監控相關程式運作，並保持最新狀況的回覆</Text>



            </Text>

            <Stack
              mt={{
                base: '8',
                md: '16',
              }}
              spacing="4"
              fontWeight="extrabold"
            >
              <HStack spacing="5" color={useColorModeValue('blue.600', 'blue.300')}>
                <Box fontSize="3xl" as={MdPermPhoneMsg} />
                <Text
                  fontSize={{
                    base: 'xl',
                    md: '2xl',
                  }}
                >
                  (02) 7750-5070
                </Text>
              </HStack>
              <HStack spacing="5" color={useColorModeValue('blue.600', 'blue.300')}>
                <Box fontSize="3xl" as={BiMessageSquareDetail} />
                <Text
                  fontSize={{
                    base: 'xl',
                    md: '2xl',
                  }}
                >
                  <a href="https://lin.ee/sBFIv9V">關網 LINE <Image
                    src="/zh-Hant.png"
                    alt="https://lin.ee/sBFIv9V"
                    width={155}
                    height={48}
                  /><br/>或掃描旁邊 QR Code</a>

                </Text>
              </HStack>
            </Stack>
          </Box>


        </Flex>
      </Box>
    </Box>
  )
}
