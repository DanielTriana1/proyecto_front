import React from 'react';
import {Link} from 'react-router-dom';

const Login = ()=> {
    return(<div className="login-box">
  <div className="login-logo">
    <Link to={"#"}><b>Inicio</b>Sesion</Link>
  </div>
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">!Bienvenido de vuelta!</p>
      <form action="#" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Correo" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Contraseña" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Recordar Sesion
              </label>
            </div>
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Iniciar</button>
          </div>
        </div>
      </form>
      <p className="mb-1">
        <Link to={"#"}>¿Olvido su contreaseña?</Link>
      </p>
      <p className="mb-0">
        <Link to={"#"} className="text-center">Registrarse</Link>
      </p>
    </div>
  </div>
</div>
)
}

export default Login;