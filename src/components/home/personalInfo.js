import React from "react";
import * as R from "ramda";

import styled from "styled-components";

const Bio = styled.p`
  font-style: italic;
  font-size: 2.5rem;
  @media print {
    display: none;
  }
`;

const ContactsContainer = styled.div`
  margin-bottom: ${R.path(["theme", "size", "space", 1])};
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: row;
  @media print {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Contact = styled.a`
  display: flex;
  align-items: center;
  transition: all, 0.5s;
  @media print {
    text-decoration: none;
    ${({ print }) => (print ? "" : "display: none;")}
  }
`;

const ContactText = styled.p`
  display: none;
  @media print {
    display: block;
  }
`;

const ContactDetails = () => (
  <ContactsContainer>
    {[
      {
        title: "email",
        href: "mailhref:contact@freddieridel.com",
        name: "mail",
        text: "contact@freddieridell.com",
        print: true
      },
      {
        title: "twitter",
        href: "https://twitter.com/FreddieRidell",
        name: "twitter",
        text: "@FreddieRidell"
      },
      {
        title: "phone",
        href: "tel:+447521160572",
        name: "phone",
        text: "+44 7521 160572",
        print: true
      },
      {
        title: "github",
        href: "https://github.com/CodogoFreddie",
        name: "github",
        text: "CodogoFreddie"
      }
    ].map(({ href, name, title, text, print }) => (
      <Contact title={title} href={href} key={href} print={print}>
        <ContactText>{text}</ContactText>
      </Contact>
    ))}
  </ContactsContainer>
);

const NameAndDeets = styled.div`
  flex-direction: column;
  display: flex;
  @media print {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  }
`;

export default () => (
  <div>
    <ContactDetails />

    <Bio>
      Hi, I'm Freddie Ridell, a Fullstack JavaScript expert specialising in
      React.js and React Native.
      {false &&
        "I'm currently looking for new opportunities as a contractor in Manchester."}
    </Bio>
  </div>
);
