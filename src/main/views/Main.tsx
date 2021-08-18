import classes from './Main.module.less'
import {ElButton} from "element-plus";
import HelloWorld from "../components/HelloWorld";

const logo = new URL('../assets/logo.png', import.meta.url).href

export default {
    render() {
        const msg = `Hello Vue 3 + TypeScript + Vite`
        return (
            <div id={classes.main}>
                <img alt="Vue logo" src={logo}/>
                <br/>
                <ElButton>按钮</ElButton>
                <HelloWorld msg={msg}/>
            </div>
        )
    }
}
