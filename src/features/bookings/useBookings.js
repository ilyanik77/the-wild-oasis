import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"

function useBookings() {
	const [searchParams] = useSearchParams()

	// Filter
	const filterValue = searchParams.get('status') 
	const filter = !filterValue || filterValue === 'all' ? null : {field: 'status', value: filterValue}

	const { isLoading, error, data: bookings} = useQuery({
		queryKey: ['bookings', filter],
		queryFn: () => getBookings({filter})
	})
	return { isLoading, error, bookings}
}

export default useBookings