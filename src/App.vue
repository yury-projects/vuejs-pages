<template>
	<div id='app'>

        <div class="ui sidebar inverted vertical menu visible">
            <!-- use router-link component for navigation. -->
            <!-- specify the link by passing the `to` prop. -->
            <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
            <a class="item">
                <router-link to="/">Home</router-link>
            </a>

            <a class="item">
                <router-link to="/todo">Go to Todo App</router-link>
            </a>
            <a class="item">
                <router-link to="/settings">Go to Settings</router-link>
            </a>
            <a class="item">
                <router-link to="/chatbot">Go to Chat Bot</router-link>
            </a>
        </div>

        <!-- <div class="ui top fixed menu"> -->
            <!-- <div class="ui title borderless item launch button">Numbers</div> -->
        <!-- </div> -->

        <div class="pusher">
            <!-- route outlet -->
            <!-- component matched by the route will render here -->
            <router-view></router-view>
        </div>

	</div>
</template>

<script type="text/javascript">

export default {
    created() {
    }
}


</script>
