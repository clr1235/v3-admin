export interface interfaceTableItem {
	[key: string]: string
}

export interface interfaceHeaderItem {
	prop: string
	label: string
	[key: string]: any
}

export interface interfaceProps {
	tableData: interfaceTableItem[]
	headers: interfaceHeaderItem[]
	showSearch?: boolean
	showIndex?: boolean
	showPagination?: boolean
	[key: string]: any
}
