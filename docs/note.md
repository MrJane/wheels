报错原因要安装依赖："vue-template-compiler": "^2.5.16"
报错：“Do not use built-in or reserved HTML elements as component id: button”
查找发现是因为组件名称所致，也就是当我们起名一个button.vue的组件时，我们安装的vue插件会自动把name设置为default
这就造成了错误
把button修改为w-button就ok了！！当然你可以修改为任何你喜欢的名字，前提是不冲突