import {defineComponent} from "vue";
import NavBar from './components/NavBar'

export default defineComponent({
    components: {
        NavBar
    },
    render() {
        return (
            <>
                <nav-bar className="top-nav-bar"></nav-bar>
                <keep-alive exclude="">
                    <router-view></router-view>
                </keep-alive>
            </>
        )
    }
})