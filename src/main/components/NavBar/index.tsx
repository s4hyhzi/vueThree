import {ElMenu, ElMenuItem, ElSubmenu} from "element-plus";
import {defineComponent, getCurrentInstance, onMounted, ref} from 'vue'

const logo = new URL('../../assets/logo.png', import.meta.url).href

const Comp = defineComponent({
    setup() {
        const str = '你好Ref'
        return (
            <span>{str}</span>
        )
    }
})

export default defineComponent({
    setup() {
        const menu = ref(null)
        onMounted(() => {
            console.log(menu.value)
        })

        const handleSelect = (key: any, keyPath: any) => {
            console.log(key, keyPath);
            // console.log(proxy.$refs.menu)
        }

        return {
            handleSelect
        }
    },
    render() {
        const slots = {
            title: () => <span>处理中心2</span>
        }
        return (
            <div>
                <Comp ref={'comp'}/>
                <ElMenu class="el-menu-demo" mode="horizontal"
                    // @ts-ignore
                        onSelect={this.handleSelect} ref='menu'>
                    <ElMenuItem index={'1'}>处理中心</ElMenuItem>
                    <ElSubmenu index={'2'} v-slots={slots}>
                        <ElMenuItem index={"2-1"}>选项1</ElMenuItem>
                        <ElMenuItem index={"2-2"}>选项2</ElMenuItem>
                        <ElMenuItem index={"2-3"}>选项3</ElMenuItem>
                    </ElSubmenu>
                </ElMenu>
            </div>
        )
    }
})