import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import musicBarAwesomeWM from '../public/images/contents/blog_musicbar.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Musicbar with AwesomeWM and Lua"
            thumbnail={musicBarAwesomeWM}
            href="https://dev.to/ashishpatwal/make-a-music-bar-listenmoe-mpd-spotify-using-awesome-window-manager-and-lua--aol"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
