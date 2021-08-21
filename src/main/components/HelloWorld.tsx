import "./HelloWorld.less"
import {ref, defineComponent, reactive} from 'vue'
import {ElButton} from "element-plus";

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String
    },
    emits: ['ok'],
    setup(props, {emit}) {
        const helloWorld = ref()
        let state = reactive({
            count: 0
        })
        const getCount = () => {
            emit('ok', state.count)
        }
        const getPrint = (e: string) => {
            console.log(e)
        }
        return {
            state,
            props,
            getCount,
            getPrint
        }
    },
    render() {
        return (
            <div ref={'helloWorld'} class={'helloWorld'}>
                <h1>{this.props.msg}</h1>
                <ElButton type="primary" onClick={() => {
                    this.state.count++;
                    this.getCount()
                }}>
                    count is: {this.state.count}
                </ElButton>
            </div>
        )
    }
})
