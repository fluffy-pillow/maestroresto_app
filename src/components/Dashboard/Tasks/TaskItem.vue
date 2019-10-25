<template>
    <li class="task-item" :class="{active: data.active}">
        <div class="container">
            <div class="label" :class="data.type">
                <div class="label-inner">
                    {{data.name}}
                </div>
            </div>
            <div class="desc">
                {{data.desc}}
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "TaskItem",
        props: {
            data: Object
        }
    }
</script>

<style scoped>
.task-item {
    padding-top: 16px;
    padding-bottom: 20px;
    width: 215px;
    background: #FFFFFF;
    border-radius: 20px;
    margin-left: 10px;
    min-width: 215px;
    border: 1px solid #F2F3F4;
}

.task-item.active {
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
}

.container {
    padding-left: 16px;
    padding-right: 13px;
}

.task-item:first-child {
    margin-left: 0;
}

.label {
    min-width: 60px;
    width: 60px;
    height: 24px;
    border-radius: 100px;
    position: relative;
}

.label.test {
    background-color: #3DD498;
}


.label.poll {
    background-color: #FFC542;
}

.label-inner {
    position: absolute;
    letter-spacing: 0.16px;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    left: 50%;
}

.desc {
    color: #4B4B4B;
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 24px;
    margin-top: 10px;
}
</style>