import {defineComponent} from "vue";
import NavBar from './components/NavBar'

export default defineComponent({
    components: {
        NavBar
    },
    render() {
        return (
            <>
                <NavBar class="top-nav-bar"></NavBar>
                <keep-alive exclude="">
                    <router-view></router-view>
                </keep-alive>
            </>
        )
    }
})