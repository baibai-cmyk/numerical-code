/**
 * 封装公共函数
 * Time: 2020-5-30
 */
$(() => {
    ((window) => {
        /**
         * 根据导航栏选项的名称进入对应的页面
         * @param {string} Name 
         */
        NavigationEntry = (Name) => {
            const lis = $('#options').find('li'); //获取导航栏选项
            switch (Name) {
                case "首页":
                    lis.eq(0).click(() => { window.location = "./index.html" });
                    break;
                case "产品中心":
                    lis.eq(1).click(() => { window.location = "" });
                    break;
                case "新闻咨询":
                    lis.eq(2).click(() => { window.location = "./News.html" });
                    break;
                case "服务支持":
                    lis.eq(3).click(() => { window.location = "" });
                    break;
                case "关于我们":
                    lis.eq(4).click(() => { window.location = "" });
                    break;
                case "联系我们":
                    lis.eq(5).click(() => { window.location = "" });
                    break;
            }
        }
        window.NavigationEntry = NavigationEntry;
    })(window);
})