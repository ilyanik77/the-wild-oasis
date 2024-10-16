import styled, { css } from 'styled-components'

const Heading = styled.h1`
	${props =>
		props.as === 'h1' &&
		css`
			font-size: 6rem;
			font-weight: 600;
		`}
	${props =>
		props.as === 'h2' &&
		css`
			font-size: 5rem;
			font-weight: 600;
		`}
	${props =>
		props.as === 'h3' &&
		css`
			font-size: 4rem;
			font-weight: 400;
			text-align: center;
		`}
	${props => 
		props.as === 'h4' &&
		css`
			font-size: 3rem;
			font-weight: 600;
			text-align: center;
		`} 
`
export default Heading
