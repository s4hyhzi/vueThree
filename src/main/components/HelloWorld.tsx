import classes from "./HelloWorld.module.less"
import {ref, defineComponent} from 'vue'
import {ElButton} from "element-plus";

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String
        }
    },
    data() {
        return {
            count: 0
        }
    },
    setup: (props) => {
        const count = ref(0)
        return () => (
            <div class={classes.helloWorld}>
                <h1>{props.msg}</h1>
                <ElButton type="primary" onClick={() => {
                    count.value++
                }}>
                    count is: {count.value}
                </ElButton>
            </div>
        )
    }
})
