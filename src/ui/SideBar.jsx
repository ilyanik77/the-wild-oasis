import styled from "styled-components"
import Logo from "./Logo"
import MainNav from "./MainNav"
import Uploader from "../data/Uploader"

const StyledSidebar = styled.aside`
	background-color: var(--color-grey-0);
	padding: 3.2rem 2.4rem;
	border-right: 2px solid var(--color-grey-300);

	grid-row: 1/-1;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`

function SideBar() {

	return (
		<StyledSidebar>
			<Logo />
			<MainNav />

			<Uploader />
			
		</StyledSidebar>
	)
}

export default SideBar





// let { data: cabins, error } = await supabase.from('cabins').select('*')

