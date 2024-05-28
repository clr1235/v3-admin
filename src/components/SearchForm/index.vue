<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { ref } from 'vue'
import { interfaceProps } from './interface'

const props = withDefaults(defineProps<interfaceProps>(), {
	showSearch: true,
	showIndex: true,
	showPagination: true
})

const searchForm: any = ref({
	name: ''
})

const ruleFormRef = ref<FormInstance>()
// 事件
const emit = defineEmits(['on-callback'])
// 查询
const obSubmit = async (formEl: any) => {
	if (!formEl) return
	await formEl.validate((valid: any, fields: any) => {
		if (valid) {
			emit('on-callback', searchForm.value)
		} else {
			console.log('error submit!', fields)
		}
	})
}
// 重置
const onReset = (formEl: any) => {
	if (!formEl) return
	formEl.resetFields()
	emit('on-callback', searchForm.value)
}
</script>

<template>
	<div class="search-wrapper">
		<el-form
			ref="ruleFormRef"
			:model="searchForm"
			:rules="searchFormRules"
			:inline="true"
			size="small"
			:scroll-to-error="true"
		>
			<el-form-item v-for="item in formItems" :label="item.label" :prop="item.prop" :key="item.prop">
				<template v-if="item.type === 'input'">
					<el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder"></el-input>
				</template>
				<template v-if="item.type === 'select'">
					<el-select v-model="searchForm[item.prop]" v-bind="item">
						<el-option v-for="(it, index) in item.options" :key="it.value" v-bind="it"></el-option>
					</el-select>
				</template>
				<template v-if="item.type === 'radio'"></template>
				<template v-if="item.type === 'checkbox'"></template>
				<template v-if="item.type === 'switch'"></template>
				<template v-if="item.type === 'date'"></template>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="obSubmit(ruleFormRef)">查询</el-button>
				<el-button type="info" @click="onReset(ruleFormRef)">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<style scoped lang="scss">
.search-wrapper {
	.el-input {
		width: 180px;
	}
	.el-select {
		width: 180px;
	}
	margin-bottom: 30px;
}
</style>
