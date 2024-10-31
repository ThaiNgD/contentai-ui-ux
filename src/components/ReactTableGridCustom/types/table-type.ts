/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnOrColumnGroup, DataGridProps } from 'react-data-grid'
import { ICalculatorTotalPage, IPaginationParams, Maybe } from '.'
import { Dispatch, Key, ReactNode, SetStateAction } from 'react'
import { PaginationRootProps } from '@mantine/core'

// phân trang table
export interface refTablePaginationClient extends Required<IPaginationParams> {
	setConfigSearch: Dispatch<SetStateAction<ISetConfigPagination>>
	resetPagition: (conditional?: boolean) => void
}

export interface IObjectDynamic {
	[key: string]: any
}

export interface IPaginationText {
	from?: number
	to?: number
}
export interface ISetConfigPagination extends IPaginationParams, IObjectDynamic {}
export interface IPaginationTextFunc extends IPaginationText, Pick<ICalculatorTotalPage, 'total'> {}
//

// table
export interface IReactTableGridCustom<T = unknown, SR = unknown, K extends Key = Key>
	extends Omit<DataGridProps<T, SR, K>, 'rows' | 'rowKeyGetter'>,
		ICalculatorTotalPage {
	classNameWapperTable?: string
	classNamePaginationTable?: string
	hiddenPagination?: boolean
	hiddenSTT?: boolean
	data?: T[]
	/** Nếu hàm onChange nên dùng useCallback */
	onChange?: Pick<PaginationRootProps, 'onChange'>['onChange']
	setConfigPagination?: Dispatch<SetStateAction<ISetConfigPagination>>
	/** Nếu hàm rowKeyGetter nên dùng useCallback*/
	rowKeyGetter?: string | Maybe<(row: NoInfer<T>) => K>
	hiddenPaginationText?: boolean
	/** dùng hàm paginationText nên dùng useCallback*/
	paginationText?: (obj: IPaginationTextFunc) => ReactNode
	listPageSize?: string[]
	fetching?: boolean
}

export type TColumnsTable<T = unknown, SR = unknown> = readonly ColumnOrColumnGroup<
	NoInfer<T>,
	NoInfer<SR>
>[]
