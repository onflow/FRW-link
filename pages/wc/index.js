import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Spline from "@splinetool/react-spline";
import { Box, Button, Flex, Text, Link } from "rebass";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lilico Mobile</title>
        <meta name="description" content="Lilico Mobile Deep Link" />
        <link rel="icon" href="/favicon.ico" />
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
            <Spline scene="https://prod.spline.design/y16diTVaJFNqfAHO/scene.splinecode" />
          </Flex>
          <Text
            sx={{ textAlign: "center" }}
            fontSize={[1, 2, 3]}
            fontWeight="semi-bold"
            color="primary"
          >
            Already have the app ?
          </Text>

          <Link
            variant="nav"
            href="lilico://"
          >
            <Box
              fontSize={[3, 4, 5]}
              sx={{
                background: "#FC814A",
                py: "1.0rem",
                px: "2rem",
                borderRadius: "5rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              Open in lilico{" "}
            </Box>
          </Link>

          <Text
            sx={{ textAlign: "center" }}
            mt={5}
            fontSize={[1, 2, 3]}
            fontWeight="semi-bold"
            color="primary"
          >
            Do not have lilico ?
          </Text>

          <Link variant="nav" href="https://lilico.app">
            <Image
              src={"/AppStore.svg"}
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
              src={"/PlayStore.svg"}
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
