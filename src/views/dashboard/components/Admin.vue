<script lang="ts" setup>
import RTable from '@/components/RTable/index.vue'
import SearchForm from '@/components/SearchForm/index.vue'
import { h, onBeforeMount, ref } from 'vue'

const tableData = ref([
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	}
])

const headers = ref([
	{
		prop: 'date',
		label: '时间',
		formatter(row: any, column: any, cellValue: any, index: number) {
			return h('span', {}, row.date + index)
		}
	},
	{
		prop: 'name',
		label: '名称'
	},
	{
		prop: 'address',
		label: '地址'
	}
])

const formItems = ref([
	{
		label: '名称',
		prop: 'name',
		type: 'input',
		placeholder: '请输入',
		size: <any>'small',
		width: ''
	},
	{
		label: '选择',
		prop: 'aaa',
		type: 'select',
		placeholder: '请选择',
		size: <any>'small',
		width: '',
		options: <any>[
			{
				value: 1,
				label: '海思科'
			},
			{
				value: 2,
				label: '海思科sls'
			}
		],
		multiple: true,
		collapseTags: true
	},
	{
		label: '内部才能',
		prop: 'jsjk',
		type: 'input',
		placeholder: '请输入',
		size: <any>'small',
		width: ''
	},
	{
		label: '高度风格化',
		prop: 'ds',
		type: 'input',
		placeholder: '请输入',
		size: <any>'small',
		width: ''
	},
	{
		label: '方式地方',
		prop: 'fgdfg',
		type: 'input',
		placeholder: '请输入',
		size: <any>'small',
		width: ''
	},
	{
		label: '基督教',
		prop: 'ghfg',
		type: 'input',
		placeholder: '请输入',
		size: <any>'small',
		width: ''
	}
])

const searchFormRules = ref({
	name: [{ required: false, message: '请输入名称', trigger: 'blur' }]
})

let listQuery = ref({
	pageSize: 10,
	pageNo: 1
})

const getList = async () => {
	console.log('获取数据')
}

// 生命周期钩子
onBeforeMount(() => {
	getList()
})

const onCallBack = (data: any) => {
	listQuery.value = Object.assign(listQuery.value, data)
	console.log(data, 'dats-s-s-s-s', listQuery.value)
	getList()
}
</script>
<template>
	<div class="app-container">
		<div class="card">
			<!-- 搜索部分 -->
			<SearchForm @on-callback="onCallBack" :form-items="formItems" :searchFormRules="searchFormRules" />
			<RTable :table-data="tableData" :headers="headers"></RTable>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.card {
	width: 100%;
	padding: 20px;
	background-color: #fff;
	border-radius: 6px;
}
</style>
