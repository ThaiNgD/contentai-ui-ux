import { useMemo } from 'react'
import { IPaginationParams } from '../types'

export interface IUseDataPagingClient<T = unknown> extends IPaginationParams {
	data?: T[]
}

const useDataPagingClient = <T>({ data = [], page, pageSize }: IUseDataPagingClient<T>): T[] => {
	const newData = useMemo(() => {
		if (page && pageSize) {
			const startIndex = (page - 1) * pageSize
			// Slice the array to get the items for the current page
			return data.slice(startIndex, startIndex + pageSize)
		}
		return data
	}, [data, page, pageSize])
	return newData
}

export default useDataPagingClient
