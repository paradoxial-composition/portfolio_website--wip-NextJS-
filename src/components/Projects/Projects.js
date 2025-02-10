import React, { useState } from "react";
import { 
  Section,
  BlogCard,
  Img,
  TitleContent,
  HeaderThree,
  Hr,
  CardInfo,
  TagList,
  Tag,
  UtilityList,
  ExternalLinks,
  GridContainer,
  ContentContainer
 } from "./styleComponents";


const Projects = ({title, projects = []}) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <Section id="projects">
      <h2 style={{ color: "hsl(204, 23.8%, 95.9%)", textAlign: "center", fontSize: "2.5rem", marginBottom: "2rem" }}>
        {title}
      </h2>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id} open={activeId === id}>
            <TitleContent onClick={() => setActiveId(activeId === id ? null : id)}>
              <HeaderThree>{title}</HeaderThree>
            </TitleContent>

            <ContentContainer key={id} open={activeId === id}>
              <Img src={image} alt={title} />
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>
                  <HeaderThree>Stack</HeaderThree>
                  <Hr />
                </TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                {visit && <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">
                  Visit
                </ExternalLinks>}
                {source && <ExternalLinks href={source} target="_blank" rel="noopener noreferrer">
                  Source
                </ExternalLinks>}
              </UtilityList>
            </ContentContainer>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;