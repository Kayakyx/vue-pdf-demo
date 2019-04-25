<template>
    <div class="pdf-demo">

<!--        <div id="demo" style="padding: 30px 40px;">-->
        <div id="demo">


            <article>
                <h3>锦时租赁资产支持收益权产品投资协议书</h3>
                <span style="margin-right:100px">丙方（受让方）：</span>       <span>身份证号：</span><br>
                <span style="margin-right:100px">投资金额：</span>       			<span>回款方式：</span> <br>
                <span style="margin-right:100px">丙方（受让方）：</span>       <span>身份证号：</span> <br>
                <span style="margin-right:100px">丙方（受让方）：</span>       <span>身份证号：</span>  <br>
                <span style="margin-right:100px">丙方（受让方）：</span>       <span>身份证号：</span>  <br>
                <span style="margin-right:100px">姓名： <span>{{contractData.name}}</span></span>       <span>电话：<span>{{contractData.phone}}</span></span>  <br>

                <p>
                    为了保护投资人的个人信息安全，本协议在展示时隐藏了投资人的身份信息，投资人知晓并同意本协议项下的投资人身份信息以投资人在乙方后台所保留的信息为准。甲、乙、丙三方根据平等、自愿、诚实信用原则，依据中华人民共和国合同法等法律法规之规定，经协商一致，就甲方将其享有的对应项目资产包的收益权转让给丙方的事宜达成如下协议：
                </p>

                <h5>第一条 转让收益权的基本情况</h5>
                <p style="color: green">
                    甲方通过金融资产交易所摘牌项目资产包，并自愿将相关资产收益转让给丙方，详见《锦时租赁资产支持收益权产品投资说明书》。
                    第二条 收益权转让的对价
                </p>
                <p>
                    甲方转让收益权对应的项目资产包本金金额为人民币（大写）贰仟万元整，（小写）¥20000000.00元，丙方受让以上收益权的1%，丙方支付的对价为人民币（大写）贰拾万元整，（小写）¥200000.00元。
                </p>
                <p>
                    收益权转让后，甲方基于对应的项目资产包享有的全部权利均转让给丙方。<br>
                    第三条 合同的签订和生效<br>
                    本协议自甲、乙、丙三方签字（盖章）之日起生效。<br>
                    第四条 收益权转让价款的支付方式<br>
                    丙方同意将收益权转让价款支付至甲方在《锦时租赁资产支持收益权产品投资说明书》中的指定收款账户，自款项进入该账户之日即视为交付完成。<br>
                    第五条 甲方声明及保证<br>
                    甲方保证其转让给丙方的收益权为甲方合法、有效、完全享有，甲方保证其不存在到期可以与该收益权相抵消的债务关系。<br>
                    第六条 违约责任<br>
                    各方应严格履行本协议，一方违约的，应向守约方承担违约责任，并赔偿因此给守约方造成的全部损失。<br>
                    第七条 纠纷解决<br>
                    各方就收益权转让发生纠纷时应协商解决，协商不成，任何一方均可向被告住所地法院提起诉讼。<br>
                    第八条 其他<br>
                    各方已经充分了解《锦时租赁资产支持收益权产品投资说明书》的条文内容和相应的法律责任，并自愿签订本协议。<br>
                </p>



                <p>
                    甲方（转让方）：杭州锦时股权投资基金管理有限公司
                </p>

                <p>
                    乙方（投顾方）：锦融卓越（北京）信息服务有限公司
                </p>
                            <!--img标签  增加 crossorigin="anonymous" 属性 允许 canvas内跨域请求 外部图片-->
                <!--
                    <img>标签使用注意：
                    如果你要用来生成canvas的dom中包含的<img>图片，之前已经被你的用户访问过（例如你是在对线上现有的业务进行改造），显然之前你应该没有给<img>标签添加crossorigin="anonymous"属性，那么请注意，这时候你的用户的浏览器已经把这些图片缓存在了本地，所以即便你按照上面的步骤都做了也没用，因为访问图片时读到的都是不带Access-Control-Allow-Origin等响应头的缓存数据。这个时候你要做的，就是给要生成canvas的dom中的所有<img>标签的src添加一个任意的字符串，只要能起到重新发起图片读取请求，从而避免读取到浏览器缓存数据即可，
                    如下所示：'http://h0.hucdn.com/open/201819/9404b56f97e7df8a_750x1334.png?any_string_is_ok'
                    注意，不要添加随机字符串，那会击穿CDN缓存的，随便添加一个固定的字符串，能够避免读取到浏览器的缓存数据就可以了。这是本人血的教训！所以请大家千万千万不要忽视这一点！
                    详见：文章--》 https://www.jianshu.com/p/22bd5b98e38a

                -->
                <p>请签名： <img crossorigin="anonymous" v-show="contractData.signatureImg" :src="contractData.signatureImg + '?any_string_is_ok'" alt="" style="width: 333px; height: 186px"></p>

            </article>


        </div>


        <button @click="handleDown">下载PDF</button>
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
                }

            }

        },


        methods: {
            handleDown(){
                htmlToPdf.downloadPDF( document.querySelector('#demo'),'我的合同');
            }
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
</style>
