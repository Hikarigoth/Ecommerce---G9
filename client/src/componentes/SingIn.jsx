import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {getUserInfo, getActiveOrder} from '../Redux/Actions/actions'
export default function Registro() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        check: false
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        nameError:"",
        lastnameError: ""
    })

    const inputsChange_name = (e) => {
        if(/[$%&|{}.,()+-<>#]/.test(data.name)) {
            setErrors({
                ...errors,
                nameError: "no se aceptan caracteres especiales"
            })
        } else {
            setErrors({
                ...errors,
                nameError: ""
            })
        }
        setData({
            ...data,
            name: e.target.value
        })
    }

    const inputsChange_lastName = (e) => {
        if(/[$%&|{}.,()+-<>#]/.test(data.lastName)) {
            setErrors({
                ...errors,
                lastnameError: "no se aceptan caracteres especiales"
            })
        } else {
            setErrors({
                ...errors,
                lastnameError: ""
            })
        }
        setData({
            ...data,
            lastName: e.target.value
        })
    }


    const inputsChange_email = (e) => {
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
            setErrors({
                ...errors,
                emailError: "El email ingresado no es valido",

            })
        } else {
            setErrors({
                ...errors,
                emailError: "",
            })
        }
        setData({
            ...data,
            email: e.target.value
        })
    }

    const inputsChange_password = (e) => {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(data.password)) {
            setErrors({
                ...errors,
                passwordError: "Debe tener al menos 6 caracteres, una mayuscula, una minuscula y un numero",
            })
        } else {
            setErrors({
                ...errors,
                passwordError: ""
            })
        }
        setData({
            ...data,
            password: e.target.value
        })
    }

    useEffect(() => {
        if (data.name.length > 3 && data.lastName.length > 3 && data.check === true && data.email.length > 1 && !errors.emailError && data.password.length > 1 && !errors.passwordError && !errors.lastnameError && !errors.nameError) {
            setErrors({
                ...errors,
                errores: false
            })
        } else {
            setErrors({
                ...errors,
                errores: true
            })
        }
    }, [data.name, data.lastName, data.email, data.password, data.check, errors.emailError, errors.passwordError, errors.nameError,errors.lastnameError])
    const handleRegister = async(e)=>{
        e.preventDefault();
        let json ={
            name: data.name,
            lastname: data.lastName,
            email: data.email,
            password: data.password
        }
        const res = await axios.post('http://localhost:3001/user', json, {
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(async(resp) =>{
            if(typeof(resp.data)==="string"){
                alert("Ya existe un usuario con este email")
            }
            // console.log(resp.data)
            dispatch(getUserInfo(resp.data))
            const ras = await axios.post(`http://localhost:3001/order/${resp.data.id}`)
            .then(orden => {
                dispatch(getActiveOrder(orden.data))
            })
            alert("Usuario registrado exitosamente")
             history.push(`/user/${resp.data.id}`)
        })

    }
    const check = (e) => {
        if (e.target.checked === true) {
            setData({
                ...data,
                check: true
            })
        } else {
            setData({
                ...data,
                check: false
            })
        }
    }

    return (
        <div className="sing_in">
            <form className="form-sing-in">
                <div class="form-group">
                    <label >Name</label>
                    <input name="name" onChange={inputsChange_name} type="text" class="form-control" style={{ color: "black", width: "450px" }} placeholder="ingresar nombre" />
                    <small className="detail">{errors.nameError}</small>
                </div>
                <div class="form-group">
                    <label >Lastname</label>
                    <input name="lastName" onChange={inputsChange_lastName} type="text" class="form-control" style={{ color: "black", width: "450px" }} placeholder="ingresa apellido" />
                    <small className="detail">{errors.lastnameError}</small>               
                </div>
                <div class="form-group">
                    <label >Email address</label>
                    <input name="email" onChange={inputsChange_email} type="email" class="form-control" style={{ color: "black", width: "450px" }} aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="detail" >{errors.emailError}</small>
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input name="password" onChange={inputsChange_password} type="password" class="form-control" style={{ color: "black", width: "450px" }} placeholder="Password" />
                    <small className="detail">{errors.passwordError}</small>
                </div>
                <div>
                    <input type="checkbox" onChange={check} />
                    <label className="checkbox" >  Acepto los <a href="http://google.com" style={{color:"black"}}> terminos y condiciones</a> </label>
                </div>
                <button onClick={handleRegister} disabled={errors.errores} requiered type="submit" class="btn btn-primary">Registrar</button>

            </form>
        </div>
    )
}