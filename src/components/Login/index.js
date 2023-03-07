import React, { useEffect } from 'react';
import './style.scss';
import $ from 'jquery';
import bg from './../../assets/img/bg.gif';
import social1 from './../../assets/img/s1.png';
import social2 from './../../assets/img/s2.png';
import social3 from './../../assets/img/s3.png';

const Login = () => {

    const active = (e) => {
        if($("#about").offset().top - $(window).scrollTop() < 450 && !$(".about").hasClass("animate")) {
            $(".about").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="login" id='login'>
            <div className="modal">
                <div className='modal__left'>
                    <div className='form'>
                        <h2>Login</h2>
                        <input className='input' type="text" placeholder='Email'/>
                        <input className='input' type="password" placeholder='Password'/>
                        <div className='forgot'>
                            <p>Forgot password ?</p>
                        </div>
                        <div className='remember'>
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <button onClick={()=>{$('.login').toggleClass('active')}}>Login</button>
                        <div className='other'>
                            <p>or use your account</p>
                            <div className='social'>
                                <img src={social1} alt='' />
                                <img src={social2} alt='' />
                                <img src={social3} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal__right'>
                    <div className='form'>
                        <h2>Sign in</h2>
                        <input className='input' type="text" placeholder='Name'/>
                        <input className='input' type="text" placeholder='Email'/>
                        <input className='input' type="password" placeholder='Password'/>
                        <button onClick={()=>{$('.login').toggleClass('active')}}>Sign in</button>
                        <div className='other'>
                            <p>or use your account</p>
                            <div className='social'>
                                <img src={social1} alt='' />
                                <img src={social2} alt='' />
                                <img src={social3} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overlay' >
                    <div className='overlay__container' style={{backgroundImage: `url(${bg})`}}>
                        <div className='overlay__container--left'>
                            <h2>Logar</h2>
                            <button onClick={()=>{$('.login').toggleClass('active')}}> Login</button>
                        </div>
                        <div className='overlay__container--right'>
                            <h2>Sign in</h2>
                            <button onClick={()=>{$('.login').toggleClass('active')}}> Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;