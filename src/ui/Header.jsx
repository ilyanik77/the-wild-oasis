import styled from "styled-components"
import HeaderMenu from "./HeaderMenu"
import UserAvatar from '../features/authentication/UserAvatar'

const StyleHeader = styled.header`
	display: flex;
	gap: 2.4rem;
	align-items: center;
	justify-content: flex-end;

	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 2px solid var(--color-grey-300);
`

function Header() {
	return (
		<StyleHeader>
			<UserAvatar />
			<HeaderMenu />
			
		</StyleHeader>
	)
}

export default Header
