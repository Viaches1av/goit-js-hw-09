import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form"),m=t.querySelector('input[name = "email"]'),l=t.querySelector('textarea[name = "message"]'),r=()=>{const a=localStorage.getItem("feedback-form-state");if(a){const{email:o,message:s}=JSON.parse(a);m.value=o,l.value=s,e.email=o,e.message=s}};document.addEventListener("DOMContentLoaded",r);t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form data:",e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.reset()});
//# sourceMappingURL=commonHelpers2.js.map