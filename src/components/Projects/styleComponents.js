import styled from 'styled-components';

// Section Styles
export const Section = styled.section`
  background: #0e1624;
  padding: 4rem 0;
`;

// Image Styles
export const Img = styled.img`
  width: 100%;
  padding-top: 20px;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
`;

// BlogCard Styles
export const BlogCard = styled.div`
  max-height: ${(props) => (props.open ? "1000px" : "0")};
  min-height: 50px;
  background: #182233; /* Darker shade to match the website's theme */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.5s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically centers content */
  align-items: center; /* Horizontally centers content if needed */

  &:hover {
    transform: translateY(-5px);
  }

  & > * {
    margin: 0;
  }
`;

// TitleContent Styles
export const TitleContent = styled.div`

  padding: 1rem;
  text-align: center;
`;

// Content Container for Smooth Animation
export const ContentContainer = styled.div`
  max-height: ${(props) => (props.open ? "1000px" : "0")};
  overflow: hidden;
  padding-bottom: ${(props) => (props.open ? "1rem" : "0")};
  transition: 0.5s ease-out;
`;

// HeaderThree Styles (Title)
export const HeaderThree = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: hsl(204, 23.8%, 95.9%); /* Matching title color */
`;

// Horizontal Rule Styles
export const Hr = styled.hr`
  border: none;
  height: 1px;
  background: #44506a; /* Lighter divider color */
  margin: 1rem 0;
`;

// CardInfo Styles (Description)
export const CardInfo = styled.p`
  padding: 0 1rem;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #bdc3c7; /* Light gray text color */
`;

// TagList Styles
export const TagList = styled.ul`
  list-style: none;
  padding: 0 1rem;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 75px;
`;

// Tag Styles
export const Tag = styled.li`
  background: transparent; /* Matching gradient buttons */
  color: #ffffff;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid #13ADC7; /* Matching gradient buttons */
  height: 25px; /* Fixed height for tags */
  display: flex; /* Enables flexbox layout */
  align-items: center; /* Vertically centers the text */
  justify-content: center; /* Horizontally centers the text (optional) */

  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  }
`;

// UtilityList Styles
export const UtilityList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  margin: 0;
`;

// ExternalLinks Styles (Buttons)
export const ExternalLinks = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%); /* Matching gradient buttons */
  padding: 0.5rem 1rem;
  width: 40%;
  text-align: center;
  border-radius: 8px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

// GridContainer Styles
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;


// Arrow Icon for Accordion Toggle
export const ArrowIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.5s ease;
  color: #bdc3c7;

  ${(props) => props.open && `transform: rotate(90deg);`}
`;
