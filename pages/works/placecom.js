import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Placecom">
      <Container>
        <Title>
          Placecom <Badge>2023</Badge>
        </Title>
        <P>
          A startup landing page made using sveltekit, tailwindcss and daisyUI.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://placecom.vercel.app">
              https://placecom.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Sveltekit, TailwindCSS, DasiyUI</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/placecom.png" alt="placecom" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
