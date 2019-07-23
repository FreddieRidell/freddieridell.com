---
title: Properties of the next social network
tags:
  - thinkpiece
  - dat
  - ssb
  - social media
  - mastodon
type: blog
abstract: Global society desperatly needs a new form of social network, but which properties should be preserved, and which should be discarded
---

It's no secret that the current social media top-dogs aren't serving the public good. 

## User time spent on the service must not incur a cost on the developer.

"So what?" we thought, "I see more than 100 every day when I walk down the street, and it might be nice to see some adverts for stuff I'm more likely to buy!" But what so few of us realised is that _advertisers would get us addicted to walking down the street if they could, and websites are very easy to make addictive._ Money comes from adverts, the more you use a sight the more adds you see, social media have no capital incentive not get addict you to their platform.

All these problems stem back from the un-avoidable fact of a centralised system: **more users spending more time means more cost.** If every minute a user spends on your platform costs you money, you need to make every minute generate money as well. But now that every minute a user spends on your platform is generating money for you, you want them to spend as much time as possible on your platform.

1. Minutes cost money
2. Minutes must make money
3. Maximising minutes maximises money
4. Addicting your users is your most profitable path

There are, obviously, ways to make money with a social platform other than building an advertising; but none as reliably scalable and profitable as advertising to your users. And when your costs increase with your success, it is imperative that you ensure your revenue does too. You are literally disincentivized to build a non-exploitative business model, lest you become a victim of your own success.

## Interactions should be pull, not push

## There should be no limits on discoverability 

## Nodes in the social graph should be homogeneous

The social graph of a social network should be comprised of many equal nodes, there shouldn't be any nodes with elevated status/permissions/roles.

My reasoning for this isn't out of some dogmatic decentralisation-maxamilism, rather that having privileged members of the social graph only moves moves all the problems of centralisation down one level. Let's look at two examples of privileged social nodes before we explore the problems they lead to:

### Mastodon
The [mastodon][mastodon] social graph is formed as a "fediverse", each user joins a specific server, which is their home, but can follow users on any other server. Your full user name includes the server your account lives on (eg: `freddie@mastadon.freddieridell.com`). Inter-server communication is handled by servers, which pull in the feeds of everyone you follow and serves up a timeline to you.

Mastodon clients distinguish between feeds from just your server, and feeds from the wider "fediverse". By default you can see a feed of everyone you follow, and a feed from everyone on your server. This serves to foster a sense of community internal to each server.

### Secure Scuttlebutt
The [ssb][ssb] social graph is ostensibly homogeneous. Each user can subscribe to any other user, and can save their social feed to their device. Alice can get Bob's feed directly from Bob, or Alice can ask Claire to send her Bob's feed with a cryptographic guarantee that the feed hasn't been tampered with

There is no guarantee that Bob - or anyone who knows Bob - will be online at the same time as Alice, or that Alice will know what IP to connect to to find someone, so ssb makes use of "pub" peers. These pubs are always online peers with static addresses that automatically follow users and replicate their feeds to improve availability. A user can be replicated by many pubs, and when inviting you to follow them will often list some of the pubs they are replicated by so that you can more easily find them. Pubs are just normal users at the protocol level, but they are treated as special super-peers by the social graph of ssb. 


---

It needs the discoverability and scale of twitter: it's a good thing that someone can have 1000000 followers, it allows people who choose to to use it as a real marketing platform, and helps to democratise content
It needs the small scale management/administration/moderation of a single-topic forum: helps create a community with its own customs, and helps keep bad actors quarantined

The difficulty comes from joining these two conflicting ideals, how can we take the best from both? Who's doing this sort of thing already?
