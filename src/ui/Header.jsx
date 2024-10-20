import styled from "styled-components"
import Logout from "../features/authentication/Logout"

const StyleHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 2px solid var(--color-grey-300);
`

function Header() {
	return (
		<StyleHeader>
			HEADER
			<Logout />
			
		</StyleHeader>
	)
}

export default Header
