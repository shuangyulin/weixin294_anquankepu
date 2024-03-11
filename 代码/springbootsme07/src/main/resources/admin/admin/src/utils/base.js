const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootsme07/",
            name: "springbootsme07",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootsme07/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网络安全科普系统"
        } 
    }
}
export default base
