<template>
    <div class="pdf-demo">
<!--        <div :class="{  'printPDF': printPDF }">-->


<!--        <div id="demo" style="padding: 30px 40px;">-->
<!--        <div id="demo" :class="{  'printPDF': printPDF }">-->
        <div id="demo" >
<!--
            <article>
                <h3>XXXXXXXXXXXXXXXXXXXXXXXXXXX协议书</h3>
                <span style="margin-right:100px">丙方（受让方）：</span>       <span>身份证号：</span><br>
                <span style="margin-right:100px">XXX金额：</span>       			<span>XXX方式：</span> <br>
                <span style="margin-right:100px">丙方（受让方）：</span>       <span>身份证号：</span> <br>
                <span style="margin-right:100px">丙方（受让方）：</span>       <span>身份证号：</span>  <br>
                <span style="margin-right:100px">丙方（受让方）：</span>       <span>身份证号：</span>  <br>
                <span style="margin-right:100px">姓名： <span>{{contractData.name}}</span></span>       <span>电话：<span>{{contractData.phone}}</span></span>  <br>

                <p>
                    为了保护XXXXXXXXXXXXXXXXX全，本协议在XXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXXXXXXXXXXXX协议项下的XXX人身份信息以XXXXXXXXXXXXXXXXXXXXXX信息为准。甲、乙、丙三方根据平等、自愿、诚实信用原则，依据中华人民共和国合同法等法律法规之规定，经协商一致，就甲方XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX事宜达XXXXXXXXX：
                </p>

                <h5>第一条 XXXXXXXXXXXXXXX情况</h5>
                <p style="color: green">
                    甲方通过金融资产交易所摘牌项目资产包，并自愿将相关资产收益转让给丙方，详见《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》。
                    第二条 收益XXXXXXXXXXX
                </p>
                <p>
                    甲方XXXXXXXXXXXXXXXXXX资产包本金金额为人民币（大写）贰仟万元整，（小写）¥20000000.00元，丙方受让以上收益权的1%，丙方支付的对价为人民币（大写）贰拾万元整，（小写）¥200000.00元。
                </p>
                <p>
                    XXXXXXXXXXX，甲方基于XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。<br>
                    第三条 XXXXXXXXXXXXXXX<br>
                    本协议自甲、乙、丙三方签字（盖章）之日起生效。<br>
                    第四条 XXXXXXXXXXXXXXXXXX方式<br>
                    丙方同意将收益权转让价款支付至甲方在《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》中的XXXXXXXXXXX，XXXXXXXXXXXXXX之日即视为交付完成。<br>
                    第五条 XXXXXXXXXXXXX<br>
                    甲方保证其转让给丙方的收益权为甲方合法、有效、完全享有，甲方保证其不存在到期可以与该收益权相抵消的债务关系。<br>
                    第六条 XXXXXXX<br>
                    各方应严格履行本协议，一方违约的，应向守约方承担XXXXXXX，并赔偿因此给守约方造成的全部损失。<br>
                    第七条 XXXXXXX<br>
                    各方就收益权转让发生纠纷时应协商解决，协商不成，任何一方均可向被告住所地法院提起诉讼。<br>
                    第八条 XXXX<br>
                    各方已经充分了解《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》的条文内容和相应的法律责任，并自愿签订本协议。<br>
                </p>


                <p>
                    甲方（转让方）：XXXXXXXXXXXXXXX基金管理有限公司
                </p>

                <p>
                    乙方（投顾方）：XXXXXXXXXXXXXXX信息服务有限公司
                </p>
                            &lt;!&ndash;img标签  增加 crossorigin="anonymous" 属性 允许 canvas内跨域请求 外部图片&ndash;&gt;
                &lt;!&ndash;
                    <img>标签使用注意：
                    如果你要用来生成canvas的dom中包含的<img>图片，之前已经被你的用户访问过（例如你是在对线上现有的业务进行改造），显然之前你应该没有给<img>标签添加crossorigin="anonymous"属性，那么请注意，这时候你的用户的浏览器已经把这些图片缓存在了本地，所以即便你按照上面的步骤都做了也没用，因为访问图片时读到的都是不带Access-Control-Allow-Origin等响应头的缓存数据。这个时候你要做的，就是给要生成canvas的dom中的所有<img>标签的src添加一个任意的字符串，只要能起到重新发起图片读取请求，从而避免读取到浏览器缓存数据即可，
                    如下所示：'http://h0.hucdn.com/open/201819/9404b56f97e7df8a_750x1334.png?any_string_is_ok'
                    注意，不要添加随机字符串，那会击穿CDN缓存的，随便添加一个固定的字符串，能够避免读取到浏览器的缓存数据就可以了。这是本人血的教训！所以请大家千万千万不要忽视这一点！
                    详见：文章&#45;&#45;》 https://www.jianshu.com/p/22bd5b98e38a

                &ndash;&gt;

                <p>请签名： <img crossorigin="anonymous" v-show="contractData.signatureImg" :src="contractData.signatureImg + '?any_string_is_ok'" alt="" style="width: 333px; height: 186px"></p>

            </article>

      -->
<!--

            <article class="contract" style="position: relative">

                <p style="margin-top: 0">合同编号：1212121212121</p>
                <h1 style="text-align: center; margin-top: 0">XXXXXXXXXXXXXXXXXXXXXXXXXXX协议书</h1>
                <div class="key-info" style="display: flex">
                    <aside class="info-left" style="flex: 1">
                        <div class="info-row">

                            <span>丙方（受让方）：</span>
                            <span></span>

                        </div>

                        <div class="info-row">

                            <span>XXX金额：</span>
                            <span>200000.00元</span>

                        </div>

                        <div class="info-row">

                            <span>XXX期限：</span>
                            <span>12个月/6个月/3个月</span>

                        </div>

                        <div class="info-row">

                            <span>预期XXXXXXX：</span>
                            <span>9.5%/8.5%/7.5%</span>

                        </div>

                        <div class="info-row">

                            <span>XXX及XXX账户：</span>
                            <span></span>

                        </div>




                    </aside>

                    <aside class="info-right" style="flex: 1">

                        <div class="info-row">

                            <span>身份证号：</span>
                            <span></span>

                        </div>


                        <div class="info-row">

                            <span>XXX方式：</span>
                            <span>季度XXX，XXXXXXX</span>

                        </div>

                        <div class="info-row">

                            <span>XXX日期：</span>
                            <span>季度XXX，XXXXXXX</span>

                        </div>

                        <div class="info-row">

                            <span>结束日期：</span>
                            <span>季度XXX，XXXXXXX</span>

                        </div>

                        <div class="info-row">

                            <span>开户行：</span>
                            <span>季度XXX，XXXXXXX</span>

                        </div>



                    </aside>




                </div>


                <p>
                    为了保护XXXXXXXXXXXXXXXXX全，本协议在XXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXXXXXXXXXXXX协议项下的XXX人身份信息以XXXXXXXXXXXXXXXXXXXXXX信息为准。甲、乙、丙三方根据平等、自愿、诚实信用原则，依据中华人民共和国合同法等法律法规之规定，经协商一致，就甲方XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX事宜达XXXXXXXXX：
                </p>

                <h3>第一条 XXXXXXXXXXXXXXX情况</h3>
                <p>甲方通过金融资产交易所摘牌项目资产包，并自愿将相关资产收益转让给丙方，详见《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》。</p>
                <h3>第二条 收益XXXXXXXXXXX</h3>
                <p>
                    甲方XXXXXXXXXXXXXXXXXX资产包本金金额为人民币（大写）贰仟万元整，（小写）¥20000000.00元，丙方受让以上收益权的1%，丙方支付的对价为人民币（大写）贰拾万元整，（小写）¥200000.00元。
                    XXXXXXXXXXX，甲方基于XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。
                </p>
                <h3>第三条 XXXXXXXXXXXXXXX</h3>
                <p>本协议自甲、乙、丙三方签字（盖章）之日起生效。</p>
                <h3>第四条 XXXXXXXXXXXXXXXXXX方式</h3>
                <p>丙方同意将收益权转让价款支付至甲方在《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》中的XXXXXXXXXXX，XXXXXXXXXXXXXX之日即视为交付完成。</p>
                <h3>第五条 XXXXXXXXXXXXX</h3>
                <p>甲方保证其转让给丙方的收益权为甲方合法、有效、完全享有，甲方保证其不存在到期可以与该收益权相抵消的债务关系。</p>
                <h3>第六条 XXXXXXX</h3>
                <p>各方应严格履行本协议，一方违约的，应向守约方承担XXXXXXX，并赔偿因此给守约方造成的全部损失。</p>
                <h3>第七条 XXXXXXX</h3>
                <p>各方就收益权转让发生纠纷时应协商解决，协商不成，任何一方均可向被告住所地法院提起诉讼。</p>
                <h3>第八条 XXXX</h3>
                <p>各方已经充分了解《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》的条文内容和相应的法律责任，并自愿签订本协议。</p>

                <footer>甲方（转让方）：XXXXXXXXXXXXXXX基金管理有限公司</footer>
                <footer>乙方（投顾方）：XXXXXXXXXXXXXXX信息服务有限公司</footer>


                <div class="signature">签名： <img crossorigin="anonymous" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2235535602,207523732&fm=26&gp=0.jpg " alt="" style="width: 190px;"></div>


            </article>
-->



            <article class="contract" style="position: relative">

                <p style="margin-top: 0">合同编号：1212121212121</p>
                <h1>XXXXXXXXXXXXXXXXXXXXXXXXXXX协议书</h1>
                <div class="key-info" style="display: flex">
                    <aside class="info-left" style="flex: 1">
                        <div class="info-row">

                            <span>丙方（受让方）：</span>
                            <span></span>

                        </div>

                        <div class="info-row">

                            <span>XXX金额：</span>
                            <span>200000.00元</span>

                        </div>

                        <div class="info-row">

                            <span>XXX期限：</span>
                            <span>12个月/6个月/3个月</span>

                        </div>

                        <div class="info-row">

                            <span>预期XXXXXXX：</span>
                            <span>9.5%/8.5%/7.5%</span>

                        </div>

                        <div class="info-row">

                            <span>XXX及XXX账户：</span>
                            <span></span>

                        </div>




                    </aside>

                    <aside class="info-right" style="flex: 1">

                        <div class="info-row">

                            <span>身份证号：</span>
                            <span></span>

                        </div>


                        <div class="info-row">

                            <span>XXX方式：</span>
                            <span>季度XXX，XXXXXXX</span>

                        </div>

                        <div class="info-row">

                            <span>XXX日期：</span>
                            <span>季度XXX，XXXXXXX</span>

                        </div>

                        <div class="info-row">

                            <span>结束日期：</span>
                            <span>季度XXX，XXXXXXX</span>

                        </div>

                        <div class="info-row">

                            <span>开户行：</span>
                            <span>季度XXX，XXXXXXX</span>

                        </div>



                    </aside>




                </div>


                <p>
                    为了保护XXXXXXXXXXXXXXXXX全，本协议在XXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXXXXXXXXXXXX协议项下的XXX人身份信息以XXXXXXXXXXXXXXXXXXXXXX信息为准。甲、乙、丙三方根据平等、自愿、诚实信用原则，依据中华人民共和国合同法等法律法规之规定，经协商一致，就甲方XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX事宜达XXXXXXXXX：
                </p>

                <h3>第一条 XXXXXXXXXXXXXXX情况</h3>
                <p>甲方通过金融资产交易所摘牌项目资产包，并自愿将相关资产收益转让给丙方，详见《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》。</p>
                <h3>第二条 收益XXXXXXXXXXX</h3>
                <p>
                    甲方XXXXXXXXXXXXXXXXXX资产包本金金额为人民币（大写）贰仟万元整，（小写）¥20000000.00元，丙方受让以上收益权的1%，丙方支付的对价为人民币（大写）贰拾万元整，（小写）¥200000.00元。
                    XXXXXXXXXXX，甲方基于XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。
                </p>
                <h3>第三条 XXXXXXXXXXXXXXX</h3>
                <p>本协议自甲、乙、丙三方签字（盖章）之日起生效。</p>
                <h3>第四条 XXXXXXXXXXXXXXXXXX方式</h3>
                <p>丙方同意将收益权转让价款支付至甲方在《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》中的XXXXXXXXXXX，XXXXXXXXXXXXXX之日即视为交付完成。</p>
                <h3>第五条 XXXXXXXXXXXXX</h3>
                <p>甲方保证其转让给丙方的收益权为甲方合法、有效、完全享有，甲方保证其不存在到期可以与该收益权相抵消的债务关系。</p>
                <h3>第六条 XXXXXXX</h3>
                <p>各方应严格履行本协议，一方违约的，应向守约方承担XXXXXXX，并赔偿因此给守约方造成的全部损失。</p>
                <h3>第七条 XXXXXXX</h3>
                <p>各方就收益权转让发生纠纷时应协商解决，协商不成，任何一方均可向被告住所地法院提起诉讼。</p>
                <h3>第八条 XXXX</h3>
                <p>各方已经充分了解《XXXXXXXXXXXXXXXXXXXXXXXXXXX说明书》的条文内容和相应的法律责任，并自愿签订本协议。</p>















                <footer>
                    <p>甲方（转让方）：XXXXXXXXXXXXXXX基金管理有限公司</p>
                    <p>乙方（投顾方）：XXXXXXXXXXXXXXX信息服务有限公司</p>
                </footer>


                <div class="signature">签名： <img crossorigin="anonymous" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2235535602,207523732&fm=26&gp=0.jpg " alt="" style="width: 190px;"></div>


            </article>




        </div>



<!--        </div>-->


        <button @click="handleDown">下载PDF</button>
        <button @click="handleWindowPrint( '#demo', '电子合同' )">浏览器打印</button>
<!--        <button @click="handleWindowPrintRouter">路由调转方式打印</button>-->
<!--        <button @click="handleWindowPrintPosition">绝对定位方式打印</button>-->

    </div>
</template>

<script>
    // import html2Canvas from 'html2canvas';
    // import JsPDF from 'jspdf';
    // import htmlToPdf from '@/unit/htmlToPdfJQ';
    import htmlToPdf from '@/unit/htmlToPdf';

    export default {
        name: "PdfDemo",

        data(){

            return {
                contractData: {
                    name: '',
                    phone: '',
                    // signatureImg: '../../../static/signature.gif'
                    signatureImg: ''
                },
                printPDF: false

            }

        },


        methods: {
            handleDown(){
                htmlToPdf.downloadPDF( document.querySelector('#demo'),'我的合同');
            },

            handleWindowPrint(ele, fileName){
                //留存原来的 html
                // let bdHtml = window.document.body.innerHTML;
                // let bdHtml = document.querySelector('#app').innerHTML;


                //要打印的 内容 html
                // document.body.innerHTML =  document.querySelector('#demo').innerHTML;
                // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
                // document.querySelector('#app').innerHTML =  document.querySelector('#demo').outerHTML;
                // document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
                console.log(666);
                //去除页面不必要的 head 标签内  内容， 避免影响打印页 ， title 为保存为 pdf 的文件时的 文件名
                document.head.innerHTML = '<meta charset="utf-8">\n' +
                    ' <title> ' + fileName + '</title>\n' +
                    ' <link rel="shortcut icon" href="http://192.168.01.01:8080/favicon.ico" type="image/x-icon" />\n' +
                    ' <meta name="format-detection" content="telephone=no">\n' +
                    ' <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
                    ' <meta name="viewport" content="width=device-width,initial-scale=1.0">\n' +
                    ' <link rel="stylesheet" href="./static/css/contract.css"/>';  //生成pdf的外部css样式
                // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
                // document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
                // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
                document.body.innerHTML =  document.querySelector( ele ).outerHTML;

                // window.print();

                //转异步 等待dom元素渲染（样式）完毕在打印
                setTimeout( ()=>{
                    //打印
                    window.print();
                    //刷新页面
                    window.location.reload();
                },20 )


                //重新设会当前页面
                // window.document.body.innerHTML = bdHtml;
                // document.querySelector('#app').innerHTML =  bdHtml;
                //刷新页面
                // window.location.reload();
            },




/*

            //路由调转去新页面方式
            handleWindowPrintRouter(){
                this.$router.push('/PrintContract');

                /!*
                //留存原来的 html
                // let bdHtml = window.document.body.innerHTML;
                let bdHtml = document.querySelector('#app').innerHTML;


                //要打印的 内容 html
                // document.body.innerHTML =  document.querySelector('#demo').innerHTML;
                document.querySelector('#app').innerHTML =  document.querySelector('#demo').outerHTML;
                window.print();
                //重新设会当前页面
                // window.document.body.innerHTML = bdHtml;
                document.querySelector('#app').innerHTML =  bdHtml;
                //刷新页面
                window.location.reload();

                *!/


            },

*/

/*

            //绝对定位方式 ， 覆盖掉不想打印的内容
            handleWindowPrintPosition(){
                //隐藏不必要内容
                this.printPDF = true;
                // window.print();
                //恢复
                // this.printPDF = false;

            }

*/



        },
        mounted() {
            //模拟发送 ajax
            setTimeout( ()=>{
                this.contractData = {
                    name: '张三',
                    phone: '11000000000',
                    // signatureImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2790212770,2892458707&fm=26&gp=0.jpg'
                    signatureImg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2235535602,207523732&fm=26&gp=0.jpg'
                }
            }, 3000);
        }
    }
</script>

<style scoped>


    #demo{
        background-color: #fff;
        width: 1000px;
        /* height: 400px; */
        margin: auto;
    }

    article{
        background: #fff;
    }

    #demo .contract {
        background: #fff;
        /*padding: 76px 76px 114px;*/
        padding: 86px 86px 114px;
        position: relative;

    }

    #demo .contract .key-info {
        display: flex;
    }

    #demo .contract .key-info> aside {
        flex: 1;
    }

    #demo .contract > h1 {
        text-align: center;
        margin-top: 0;
    }

    #demo .contract > p:first-child {
        margin-top: 0;
    }

    #demo .contract .key-info .info-left .info-row > span:first-child,
    #demo .contract .key-info .info-right .info-row > span:first-child{
        font-weight: 600;
    }

    #demo .contract .signature {
        position: absolute;
        right: 86px;
        bottom: 0;
    }

    #demo .contract .signature > img {
        width: 200px;
    }


    #demo {
        color: #000;
        font-family: "Microsoft YaHei";
    }


    h1{
        font-size: 24px;
        font-weight: 700;
    }

    h3{
        font-size: 18.72px;
        font-weight: 700;
        margin: 18.720px 0;
    }
    p {
        margin: 16px 0;
    }




    /*

        #demo.printPDF {
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            !*height: 100vh;*!
            z-index: 99;
            overflow: auto;
        }
    */

/*
    .printPDF {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 99;
        background: #fff;
        overflow: auto;

    }


*/




</style>
