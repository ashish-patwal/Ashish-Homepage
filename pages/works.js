import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMoodle from '../public/images/works/moodle_eyecatch.png'
import thumbRofiYoutube from '../public/images/works/rofiYoutube_eyecatch.jpg'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="moodle_automate"
              title="Moodle Automate"
              thumbnail={thumbMoodle}
            >
              A python program to automate the moodle platform for college
              students.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="rofi_youtube"
              title="RofiYoutube"
              thumbnail={thumbRofiYoutube}
            >
              A rofi launcher powered youtube search / video player.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
