import './Main.less'
import {ElButton} from "element-plus";
import HelloWorld from "../components/HelloWorld";
import {defineComponent, onMounted, reactive, ref} from "vue";

const logo = new URL('../assets/logo.png', import.meta.url).href

export default defineComponent({
    setup(props, {emit}) {
        const hello = ref<any>()
        onMounted(() => {
            console.log(hello.value)
            // hello.value.get
            console.log(import.meta.env.VITE_APP_BASE_API,14)
            hello.value.getPrint('你好世界')
        })
        let state = reactive({
            msg: `Hello Vue 3 + TypeScript + Vite`
        })
        return {
            hello,
            state,
            props
        }
    },
    render() {
        return (
            <div id={'main'}>
                <img alt="Vue logo" src={logo}/>
                <br/>
                <ElButton>按钮</ElButton>
                <HelloWorld onOk={(e) => {
                    console.log(e)
                }} msg={this.state.msg} ref={'hello'}/>
            </div>
        )
    }
})

