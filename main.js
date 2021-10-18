const registerBtn = document.getElementById('btn-resigter');
const registerElement = document.querySelector('.auth-form__register')
const resignElement = document.querySelector('.auth-form__resign');
const resignBtn= document.getElementById('btn-resign')
const closetabBtn = document.querySelector('.close-tab')
const closetabresign = document.querySelector('.close-tab-resign')
const switchResign = document.querySelector('.auth-form__btn-swtich')
const switchRegister = document.querySelector('.auth-form__btn-swtichs')
const overModal = document.querySelector('.modal__overlay')
const controlBack = document.querySelectorAll('.auth-form__controls-back')
const modalBack = document.querySelector('.modal__overlay')

console.log(modalBack)
// registerbtn
 function handlerRegister()
 {
     
    
     modal.classList.add('acitve-modal')
     registerElement.classList.add('auth-form-register')

 }
 const modal = document.querySelector('.modal')
registerBtn.onclick = handlerRegister;
 
//resignbtn
function handlerResign()
 {
     modal.classList.add('acitve-modal')
     resignElement.classList.add('auth-form-resign')

 }
resignBtn.onclick = handlerResign;
//closetab
function handlerClose()
{
    modal.classList.remove('acitve-modal')
    registerElement.classList.remove('auth-form-register')
}
closetabBtn.onclick = handlerClose;

function handlerCloseresign()
{
    modal.classList.remove('acitve-modal')
    resignElement.classList.remove('auth-form-resign')
}
closetabresign.onclick = handlerCloseresign;
//btn-switch
function handlerSwitchresign()
{
    
    registerElement.classList.remove('auth-form-register')
    resignElement.classList.add('auth-form-resign')

}
switchResign.onclick = handlerSwitchresign;
function handlerSwitchresigter()
{
    resignElement.classList.remove('auth-form-resign')
    registerElement.classList.add('auth-form-register')

}
switchRegister.onclick = handlerSwitchresigter
function handlerBackbtn ()
{
    modal.classList.remove('acitve-modal')
    registerElement.classList.remove('auth-form-register')
    resignElement.classList.remove('auth-form-resign')
}
overModal.onclick = handlerBackbtn;
controlBack.forEach(function(rule) {

    rule.onclick = handlerBackbtn;
})
;
// Validator
function Validator(options) 
    {  
        // Lấy element của form cần validatád
        function getParents(element, selector)
        {       
            while(element.parentElement)
            {
                if(element.parentElement.matches(selector))
                {
                    return element.parentElement;
                }
                element = element.parentElement;
               
            }
          
      }
        var selectorRules = {};
       
         // Hàm thực hiện validate
        function validate(inputElement, rule){
                var errorMessage;
                var errorElement = getParents(inputElement, options.formGruopSelector).querySelector(options.errorSelector);
                var rules = selectorRules[rule.selector]
          
             // lấy ra từng rule của selectors
             for ( var i=0 ;i < rules.length ;++i){
             switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
                    break;
                    default:
                     errorMessage = rules[i](inputElement.value);
                    
                    }
                       if(errorMessage)
                           break;
                    }
            // Nếu có lỗi dừng việc kiểm tra
                        if (errorMessage)
                        {  
                           errorElement.innerText= errorMessage;
                            getParents(inputElement, options.formGruopSelector).querySelector(rule.selector).classList.add('invalid');
                                                                          
                        }
                        else
                        {   errorElement.innerText = ''
                             getParents(inputElement, options.formGruopSelector).querySelector(rule.selector).classList.remove('invalid');
                        }
                          return !errorMessage;
     }
    
         
        var formElement = document.querySelector(options.form);
        if(formElement)
        {   
                formElement.onsubmit = function(e){
                    e.preventDefault();
                    var isFormValid = true
                    //lặp qua từng rule và validate
                    options.rules.forEach(function(rule){
                        var inputElement = formElement.querySelector(rule.selector);
                        validate(inputElement, rule);
                        var isValid = validate(inputElement, rule);
                        if(!isValid){
                            isFormValid = false;
                        }
                        });
                    if(isFormValid){
                        if(typeof options.onsubmit === 'function')
                        {   var enableInputs = formElement.querySelectorAll('[name]');
                        var formValues = Array.from(enableInputs).reduce(function(values,input){
                            switch(input.type)
                            {
                                case 'radio':
                                    values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                   break;
                                    case 'checkbox':
                                        if(!input.matches(':checked')) return values;
                                        if(!Array.isArray(values[input.name])){
                                            values[input.name] = [];
                                        }
                                        values[input.name].push(input.value);
                                        break;
                                        default:
                                            values[input.name] = input.value;
                                        }
                                        returnValue = values ;
                                        console.log(returnValue);
                                        return values;
                                        
                                    },{});
                                    options.onsubmit(formValues);
                                }
                             }
                        }


                                    
                                    
                        if (formElement){
                           options.rules.forEach(function(rule)
                            
                            {    // lưu lại các rules cho mỗi input
                          
                             if(Array.isArray(selectorRules[rule.selector]))
                              {
                                  selectorRules[rule.selector].push(rule.test) ; //lưu key và value của rule vào mảng trong tình huống đã có một value trong array
                                  //push thêm một rule array đã có vào object
                              }
                              else
                              {   selectorRules[rule.selector] =[rule.test]; // lưu key và value của rule vào màng trong tình huống mảng trống ( chưa có giá trị)
                            }
                
                               var inputElements = formElement.querySelectorAll(rule.selector);
                               
                               Array.from(inputElements).forEach(function(inputElement) {
                                inputElement.onblur = function()
                                   {
                                       
                                    validate(inputElement, rule);
                                   }
                                   // Xử lý mỗi khi người dùng  nhập vào input
                                     inputElement.oninput = function (){
                                    var errorElement = getParents(inputElement, options.formGruopSelector).querySelector('.form-message');
                                    errorElement.innerText = '';
                                    getParents(inputElement, options.formGruopSelector).querySelector(rule.selector).classList.remove('invalid');
                                    }
                               })
                
                            
                
                           });
                           
                            
                        }
                    
                    }
                    }
                            
                           
                            
        
                        
                       
      

            // xử lý lặp qua mỗi rule(lắng nghe sự kiện blur, input)
       // lấy element của form cần validate

    
Validator.isRequired = function(selector,message){
        return {
   selector : selector,
    test : function (value){
            return value ? undefined : 'Vui lòng nhập trường này'
    }
        }



};
Validator.isEmail = function(selector,message){
    return {
        selector: selector,
        test: function (value){
            // Xử lý trường hợp blur khỏi input
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
            
        }

}
};
Validator.minLength = function(selector, min ,message){
    return {
        selector: selector,
        test: function (value){
            return value.length >= min  ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
            
        }
        

}
};
Validator.isConfirmed = function(selector , passwordconfirmation,message ) {
    return{
        selector: selector,
        test: function (value){
            return value === passwordconfirmation () ? undefined : message || 'Giá trị nhập vào không đúng'
        }
    }}
    console.log(returnValue);