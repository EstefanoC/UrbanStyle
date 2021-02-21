import React from 'react'


const CuponForm = () => (
        <form className="input-group needs-validation">
              <input type="email" className="form-control col-form-label-lg d-block pl-2" name="email" aria-describedby="emailHelpId" placeholder="Ejemplo@ejemplo.com" required/>
              <div className="valid-feedback">Su correo es valido</div>
              <div className="invalid-feedback">Su correo es incorrecto</div>
              <button className="btn bg-tertiary text-light">Enviar</button>
        </form>
)

export default CuponForm