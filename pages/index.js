import { Box, Flex, Heading, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { MdPermPhoneMsg } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
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

              <b>財政部電子發票平台維護公告</b><br/>
                財政部電子發票平台於 110 年 8 月 3 日 18:00 至 110 年 8 月 4 日 07:00 暫停營運服務，公告連結如下：
                <a href={"https://www.einvoice.nat.gov.tw/home/Article!showArticleDetail?articleId=1627031907194"}>https://www.einvoice.nat.gov.tw/home/Article!showArticleDetail?articleId=1627031907194</a>

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
