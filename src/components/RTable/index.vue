<script lang="ts" setup>
import { ref } from 'vue'
import { interfaceProps } from './interface'

const props = withDefaults(defineProps<interfaceProps>(), {
	showSearch: true,
	showIndex: true,
	searchForm: {},
	showPagination: true
})

const headerRowClassName = (data: any) => {
	return 'header-row'
}

const RTable = ref()
</script>

<template>
	<div class="table-wrapper">
		<!-- 表格部分 -->
		<el-table
			ref="RTable"
			:data="tableData"
			stripe
			style="width: 100%"
			:border="true"
			:header-row-class-name="headerRowClassName"
			v-bind="$attrs"
		>
			<el-table-column v-if="showIndex" :fixed="true" label="序号" type="index" width="60">
				<template #default="scope">
					<span>{{ scope.$index + 1 }}</span>
				</template>
			</el-table-column>
			<el-table-column
				v-for="(item, index) in headers"
				:key="`${item.prop}_${index}`"
				:prop="item.prop"
				:label="item.label"
				:formatter="item.formatter"
			>
			</el-table-column>
		</el-table>
		<!-- 分页部分 -->
		<div class="pagination-wrapper" v-if="showPagination">
			<el-pagination background layout="total, sizes, prev, pager, next" :total="1000" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.table-wrapper {
	::v-deep(.el-table tr.header-row th) {
		background-color: #fafafa;
		font-weight: 400;
		color: #222;
	}
	.pagination-wrapper {
		padding-top: 30px;
	}
}
</style>
