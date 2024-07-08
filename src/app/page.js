import { Text, Box } from "@chakra-ui/react"
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image src="/pianoicon.svg" width={150} height={150} alt="PianoTown-Logo" />
    </>
  );
}
