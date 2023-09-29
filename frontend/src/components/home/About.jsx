import styled from "styled-components";
import background from "../../img/People-Eating-and-Drinking-90673271.jpg";
import SectionTitle from "../SectionTitle";
import watchIcon from "../../img/stopwatch-solid.svg";
import burgerIcon from "../../img/hamburger-solid.svg";
import walletIcon from "../../img/wallet-solid.svg";

const StyledAbout = styled.section`
  width: 100vw;
  margin-bottom: 40px;
`;

const AboutWrapper = styled.article`
  max-width: 1250px;
  justify-content: center;
  min-height: 300px;
  width: 100vw;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin: 0 auto;

  & > * {
    flex: 1 0 1;
    margin-top: -50px;
    @media screen and (min-width: 950px) {
      width: 50%;
      margin-top: 0;
    }
  }
`;
const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
const Image = styled.img`
  max-width: 400px;
  margin: 0 auto;
  object-fit: contain;
  ${'' /* margin-top: 30px; */}
`;
const HistorySection = styled.div`
  text-align: center;
  padding: 50px 15px;
  margin-left: -6px;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
  flex: 1;

  @media screen and (min-width: 950px) {
    max-width: 600px;
    margin-right: -100px;
    align-items: flex-start;
  }
`;
const Features = styled.div`
  display: flex;
  gap: 30px;
  opacity: 0.8;
  margin: 40px auto 20px;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease;
  }
  & div:hover {
    transform: scale(1.1);
  }
  & div h4 {
    margin-bottom: 0;
  }
`;
const Icon = styled.img`
  width: 40px;
`;
export default function About() {
  return (
    <StyledAbout>
      <AboutWrapper className="flex">
        <HistorySection>
          <SectionTitle>About us</SectionTitle>

          <p style={{lineHeight: "1.3rem"}}>
            Welcome to Foodie! 
            We&apos;re a passionate team dedicated to serving you the finest 
            culinary experiences from the comfort of your home. 
            Our mission is to make food discovery and delivery a seamless journey, 
            offering a diverse range of restaurants and cuisines at your fingertips.
            With a love for great food and technology, we&apos;ve crafted a platform that 
            connects you with the flavors you crave. Our commitment to quality, convenience, 
            and customer satisfaction drives us to ensure each order is a delightful experience.
            Whether you&apos;re looking for a quick bite or a gourmet feast, our platform brings the 
            best of local eateries right to your door. Explore, indulge, and savor every moment as 
            we redefine the way you enjoy your favorite meals.
            Join us in this culinary adventure and discover a world of taste with 
            Foodie.
          </p>
          <Features>
            <div>
              <Icon src={burgerIcon} alt="best-ingredients" />
              <h4>Quality</h4>
            </div>
            <div>
              <Icon src={walletIcon} alt="best-prices" />
              <h4>Prices</h4>
            </div>

            <div>
              <Icon src={watchIcon} alt="super-fast" />
              <h4>Speed</h4>
            </div>
          </Features>
        </HistorySection>
        <ImgSection>
          <Image src={background} alt="piles of food"></Image>
        </ImgSection>
      </AboutWrapper>
    </StyledAbout>
  );
}
