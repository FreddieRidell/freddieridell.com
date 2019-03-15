import React from "react";
import styled from "styled-components";

const AddressesCodeBlock = styled.code`
	grid-column: left / right;
  is: 'code',
	display: block;
	font-family: monospace;
	overflow: auto;
	white-space: pre;
	width: 100%;
`;

export default () => (
	<div>
		<AddressesCodeBlock>
			pgp: 6BE0AF404BB9D844281F3DA5ACD8B92700BF93A0
			{"\n"}
			eth: 0x330E067E74FB15d4A71e58afFf459Db92eA85a78
			{"\n"}
			monero:
			46CFjzzLYuWJtT1tuFaRSTRp3XnqH8rUB6j8CpHgXC9EG3WBbdzfQKXZxcKNSoz28AS4hPRus7acaG5XEiEAvkkX3izgNkg
			{"\n"}
			btc: 159CcWg7MvmKePfUoKxXYRf2TPEorGzqGD
			{"\n"}
			ltc: LfZdJDtwNpsKrsJYEgqAuJnCBoyiMPYs1Y
			{"\n"}
			doge: DEVPfEpNTeTzUMzttfdxZ9ULTUAqzY2vPw
			{"\n"}
			Yu Gi Oh Duel Links: 549-882-525
		</AddressesCodeBlock>
	</div>
);
