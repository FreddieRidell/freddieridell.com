import React from 'react';

import styled from 'styled-components';
import system from 'system-components';

import {Icon, Section, H1} from '../../toolbox';

const Bio = styled.p`
  font-style: italic;
  font-size: 2.5rem;
  @media print {
    display: none;
  }
`;

const ContactsContainer = system({
  mb: 1,
  display: 'flex',
  flex: 1,
  align: 'flex-end',
  justify: ['flex-start', 'flex-end'],
  direction: 'row',
}).extend`
  @media print {
	flex-direction: column;
	align-items: flex-end;
  }`;

const Contact = system({
  display: 'flex',
  align: 'center',
  is: 'a',
  pl: [0, 2],
  pr: [2, 0],
  color: 'grey',
  hover: {
    color: 'black',
  },
  active: {
    color: 'black',
  },
}).extend`
	transition: all, 0.5s;
	@media print {
	text-decoration: none;
	${({print}) => (print ? '' : 'display: none;')}}
`;

const ContactText = system({
  is: 'p',
  mr: 1,
}).extend`
	display: none;
	@media print {
		display: block;
		}
`;

const ContactDetails = () => (
  <ContactsContainer>
    {[
      {
        title: 'email',
        href: 'mailhref:contact@freddieridel.com',
        name: 'mail',
        text: 'contact@freddieridell.com',
        print: true,
      },
      {
        title: 'twitter',
        href: 'https://twitter.com/FreddieRidell',
        name: 'twitter',
        text: '@FreddieRidell',
      },
      {
        title: 'phone',
        href: 'tel:+447521160572',
        name: 'phone',
        text: '+44 7521 160572',
        print: true,
      },
      {
        title: 'github',
        href: 'https://github.com/CodogoFreddie',
        name: 'github',
        text: 'CodogoFreddie',
      },
    ].map(({href, name, title, text, print}) => (
      <Contact title={title} href={href} key={href} print={print}>
        <ContactText>{text}</ContactText>
        <Icon name={name} />
      </Contact>
    ))}
  </ContactsContainer>
);

const NameAndDeets = system({
  flexDirection: ['column', 'row'],
}).extend`
	display: flex;
	@media print {
		flex-direction: row;
		align-items: flex-end;
    justify-content: space-between;
	width: 100%;
		}
`;

export default () => (
  <Section>
    <NameAndDeets>
      <H1>Freddie Ridell</H1>
      <ContactDetails />
    </NameAndDeets>

    <Bio>
      Hi, I'm Freddie Ridell, a Fullstack JavaScript expert specialising in
      React.js and React Native. I'm currently looking for new opportunities as
      a contractor in Manchester.
    </Bio>
  </Section>
);
