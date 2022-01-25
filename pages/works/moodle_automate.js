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
          Moodle Automate <Badge>2022</Badge>
        </Title>
        <P>
          A python program / tool to automate the online learning platform
          moodle for college students.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/ashish-patwal/MoodleAutomate">
              https://github.com/ashish-patwal/MoodleAutomate/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, PIP, Virtualenv</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/moodle_01.png" alt="moodle_automate" />
        <WorkImage src="/images/works/moodle_02.png" alt="moodle_automate" />
        <WorkImage src="/images/works/moodle_03.png" alt="moodle_automate" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
