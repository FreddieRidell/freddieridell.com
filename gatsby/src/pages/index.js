import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data, }) => (
	<div>
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<Link to="/page-2/">Go to page 2</Link>
	</div>
)

export default IndexPage

export const query = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark {
			edges {
				node {
					fileAbsolutePath
					html
					excerpt
					timeToRead
					fields {
						slug 
					}
					frontmatter {
						title
						published
					}
				}
			}
		}
	}
`


//# Hi, I'm Freddie Ridell.

//+ I'm the CTO of [codogo.io](https://codogo.io).
//+ I write about my open source work [here](/open-source/)
//+ I've started bloging [here](/blog/)
//+ I sometimes do arts-and-crafts [here](/crafty/)

//## Social Media:
//[twitter][twitter]
//|
//[github][github]
//|
//[refind][refind]
//|
//[mastodon][mastodon]
//|
//[freddie@codogo.io][email]

//---

//This page is still very much a work in progress, but I'm adding new content to it every day.
//Please do check back in regularly

//## Addresses:
//<div id="addresses">
//pgp:    6BE0AF404BB9D844281F3DA5ACD8B92700BF93A0
//eth:    0x330E067E74FB15d4A71e58afFf459Db92eA85a78
//monero: 46CFjzzLYuWJtT1tuFaRSTRp3XnqH8rUB6j8CpHgXC9EG3WBbdzfQKXZxcKNSoz28AS4hPRus7acaG5XEiEAvkkX3izgNkg
//btc:    159CcWg7MvmKePfUoKxXYRf2TPEorGzqGD
//ltc:    LfZdJDtwNpsKrsJYEgqAuJnCBoyiMPYs1Y
//doge:   DEVPfEpNTeTzUMzttfdxZ9ULTUAqzY2vPw
//Yu Gi Oh Duel Links: 549-882-525
//</div>

//[refind]: https://refind.com/FreddieRidell?invite=6ea3358605
//[twitter]: https://twitter.com/FreddieRidell
//[github]: https://github.com/CodogoFreddie
//[email]: mailto:freddie@codogo.io
//[mastodon]: https://toot.cafe/@freddieRidell
//[pgp]: https://pgp.mit.edu/pks/lookup?op=vindex&search=0xACD8B92700BF93A0

