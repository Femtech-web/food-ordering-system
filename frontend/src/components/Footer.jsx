import styled from "styled-components";
import SocialMenu from "./SocialsMenu";
import logo from "../img/logo-white.png";
import locationIcon from "../img/map-marker-alt-solid.svg";
import phoneIcon from "../img/phone-alt-solid.svg";
import emailIcon from "../img/envelope-regular.svg";

const StyleFooter = styled.footer`
  box-sizing: border-box;
  width: 100vw;
  padding: 15px;
  background-color: ${(props) => props.theme.black};
  color: #f0f0f0;
`;
const FooterWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
const FooterSection = styled.article`
  min-width: 300px;
  padding: 15px;
  flex: 1;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease;
  margin: 8px 0;
  &:hover {
    color: #e83c2e;
    font-weight: 400;
  }
`;
const Hours = styled(Link)`
  &:hover:before {
    color: #f0f0f0;
  }
  &:before {
    content: ">";
    color: #fcba1c;
  }
`;
const Span = styled.span`
  color: #fcba1c;
`;
export const Icon = styled.div`
  width: 15px;
  display: inline-block;
  display: grid;
  place-items: center;
  margin-right: 8px;
`;
const Logo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;
export default function Footer() {
  return (
    <StyleFooter>
      <FooterWrapper>
        <FooterSection>
          <Logo src={logo} alt="logo"></Logo>
          <p style={{lineHeight: "1.2rem"}}>
            An Amazing place for a healthy meal and self-esteem.
          </p>
        </FooterSection>
        <FooterSection>
          <h4>LOCATIONS</h4>
          <address>
            <List>
              <ListItem>
                <Icon>
                  <img src={locationIcon} alt="location"></img>
                </Icon>{" "}
                <Link>OGITECH, igbesa Lagos</Link>
              </ListItem>
              <ListItem>
                <Icon>
                  <img src={locationIcon} alt="location"></img>
                </Icon>{" "}
                <Link>Morogbo, Lagos state</Link>
              </ListItem>
            </List>
          </address>
        </FooterSection>
        <FooterSection>
          <h4>CONTACT</h4>
          <address>
            <List>
              <ListItem>
                <Icon>
                  <img src={phoneIcon} alt="phone"></img>
                </Icon>{" "}
                <Link href="tel://3513850064">+234 812 657 4356</Link>
              </ListItem>
              <ListItem>
                <Icon>
                  <img src={emailIcon} alt="email"></img>
                </Icon>{" "}
                <Link href="mailto:brisaabiaildiaz2000@gmial.com">
                  foodteam@gmial.com
                </Link>
              </ListItem>
            </List>
          </address>
        </FooterSection>
        <FooterSection>
          <h4>OPENING DAYS</h4>
          <List>
            <ListItem>
              <Hours> Mon - Friday --------- 9am - 5pm</Hours>
            </ListItem>
            <ListItem>
              <Hours> Saturdays --------- 9am - 3pm</Hours>
            </ListItem>
            <ListItem>
              <Hours>
                {" "}
                Sundays --------- <Span>no open</Span>
              </Hours>
            </ListItem>
          </List>
        </FooterSection>
      </FooterWrapper>
      <SocialMenu></SocialMenu>
    </StyleFooter>
  );
}
