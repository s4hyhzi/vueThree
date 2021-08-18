import {ElMenu, ElMenuItem, ElSubmenu} from "element-plus";
import {defineComponent} from 'vue'

const logo = new URL('../../assets/logo.png', import.meta.url).href

export default defineComponent({
    setup: function () {
        const handleSelect = (key: any, keyPath: any) => {
            console.log(key, keyPath);
        }
        const slots = {
            title: () => <span>处理中心2</span>
        }
        return () => (
            <div>
                <ElMenu class="el-menu-demo" mode="horizontal" onSelect={handleSelect}>
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