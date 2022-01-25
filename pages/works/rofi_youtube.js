import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Moodle Automate">
      <Container>
        <Title>
          Rofi Youtube <Badge>2022</Badge>
        </Title>
        <P>
          A shell script that helps you to view youtube videos directly through
          rofi launcher and mpv.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/ashish-patwal/RofiYoutube">
              https://github.com/ashish-patwal/RofiYoutube/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Shell Script</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/rofiYoutube_eyecatch.jpg"
          alt="rofi_youtube"
        />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
