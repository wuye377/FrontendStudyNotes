document.addEventListener("DOMContentLoaded",function(){
    const oUser=document.getElementById("userName");
            const oPa=document.getElementById("passWord");
            const oBtn=document.getElementById("loginForm");
            const oTip=document.getElementById("tip");
            function verification(){
                oTip.textContent = "";
                const userValue=oUser.value.trim();
                if(userValue===""){
                    oTip.textContent="输入用户名不能为空";
                    oTip.style.color="red";
                    return false;
                }
                const passW=oPa.value.trim();
                if(passW.length<6){
                    oTip.textContent="密码长度不能小于6位数";
                    oTip.style.color="red";
                    return false;
                }
                oTip.textContent="登录成功"
                oTip.style.color="green";
                return true;
            }
            oBtn.addEventListener("submit",function(e){
                e.preventDefault();
                const isPass=verification();
                console.log('校验结果',isPass);
            });
})