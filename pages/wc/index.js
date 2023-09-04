import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Spline from "@splinetool/react-spline";
import { useRouter } from 'next/router'
import { Box, Button, Flex, Text, Link } from "rebass";

export default function Home() {
  const router = useRouter()
  const {uri} = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>Flow Core Wallet Mobile</title>
        <meta property="og:title" content="Flow Core Wallet Mobile" />
        <meta name="description" content="Flow Core Wallet Mobile Deep Link" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://fcw-link.lilico.app/logo.png" />
      </Head>


      <main className={styles.main}>
        <Flex
          p={["30px", "40px", "60px"]}
          sx={{
            background: "rgba(45,45,45, 0.4)",
            gap: "25px",
            padding: "80px",
            borderRadius: "24px",
            alignItems: "center",
            maxWidth: "500px",
            // maxHeight: "350px",
          }}
          flexDirection="column"
        >
          <Flex
            sx={{ height: "100px", width: "100px", "align-self": "center" }}
          >
            <Image alt="logo" src='/logo.png' width="100px" height="100px"/>
          </Flex>
          <Text
            sx={{ textAlign: "center" }}
            fontSize={[3, 4, 5]}
            fontWeight="bold"
            color="primary"
          >
            Flow Core
          </Text>

          <Link
            variant="nav"
            href={ uri && uri !== '' ? `fcw://wc?uri=${encodeURIComponent(uri)}` : "fcw://"}
          >
            <Box
              fontSize={[1, 2, 3]}
              sx={{
                background: "#41CC5D",
                py: "1.0rem",
                px: "2rem",
                borderRadius: "0.5rem",
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              {" "}
              Open in Flow Core{" "}
            </Box>
          </Link>

          <Flex mt={5} sx={{alignItems: 'center', justifyContent: 'center', gap: '15px'}} width="100%">
            <Box sx={{ height: '1px' , width: '20%', backgroundColor: "#9F9F9F" }}/>
          <Text
            sx={{ textAlign: "center", color: "#9F9F9F" }}
            fontSize={[1, 1, 1]}
            fontWeight="semi-bold"
          >
            Do not have app ?
          </Text>
            <Box sx={{ height: '1px' , width: '20%', backgroundColor: "#9F9F9F" }}/>
          </Flex>

            <Link variant="nav" href="https://apps.apple.com/us/app/lilico/id1644169603">
              <Image
                src={"/AppStore_Dark.svg"}
                alt={"AppStore"}
                layout="fixed"
                height="50"
                width="250"
                objectFit="contain"
              ></Image>
            </Link>

            <Link
              variant="nav"
              href="https://play.google.com/store/apps/details?id=io.outblock.lilico"
            >
              <Image
                src={"/PlayStore_Dark.svg"}
                alt={"AppStore"}
                layout="fixed"
                height="50"
                width="250"
                objectFit="contain"
              ></Image>
            </Link>
        </Flex>
      </main>
    </div>
  );
}
