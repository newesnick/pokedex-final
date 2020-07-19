import React, { useState, useEffect } from 'react';


const Home = props => {

  const [value, setValue] = useState(true)/* texto */
  const [value2, setValue2] = useState(false)/* abrir-cerrar */
  const [pokemons, setPokemons] = useState([])
  const [index, setIndex] = useState(-1)
  const indexo = (index) => { return ('https://pokeres.bastionbot.org/images/pokemon/' + index + '.png') }

  const GETObjeto = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
    const data = await res.json()
    setPokemons(data.results)
    console.log(data)
  }

  useEffect(() => { GETObjeto() }, [])
  /* const Test = ()=>{} */

  return (
    <>
      {/* FILA-1 */}
      <div className="container">
        <div className="row">

          <div className="col-2"> </div>

          {/* FILA-1-luces*/}
          {value2 ?
            <div className="col-4 rojo2 d-flex justify-content-md-start pt-2 border-bottom border-dark " id="filaencendido">
              <span type="button" class="dot1 btn btn-outline-success" onClick={() => { setValue2(!value2); setIndex(-1) }}></span>
              <span class="dot2"></span>
              <span class="dot3"></span>
              <span class="dot4"></span>
            </div>
            : <div className="col-4 rojo2 d-flex justify-content-md-start pt-2 border-bottom border-dark " id="filaencendido">
              <span type="button" class="dot1 btn btn-outline-success" onClick={() => { setValue2(!value2); setIndex(-1) }}></span>
              <span class="dot2off"></span>
              <span class="dot3off"></span>
              <span class="dot4off"></span>
            </div>
          }

          {/* FILA-1-visagra */}
          <div className="col-1 rojo2 border-left border-right border-dark" id="visagra-top"></div>



          {/* FILA-2 */}
          <div className="container">
            <div className="row">

              <div className="col-2"></div>

              {/* FILA-2-zona pantalla */}
              {value2 ?
                <div className="col-4 rojo d-flex justify-content-md-center py-3 border-bottom border-dark" id="filapantalla">
                  <div id="screen" >

                    {index > -1 ? <img id="imagen" src={indexo(index + 1)} /> : <></>}

                  </div>
                </div>
                : <div className="col-4 rojo2 d-flex justify-content-md-center py-3" id="filapantalla">  </div>
              }

              {/* FILA-2-visagra */}
              <div className="col-1 rojo2 border-left border-right border-dark"></div>

              {/* FILA-2-tapa */}
              {value2 ?
                <div className="col-4 rojo p-4  align-middle" id="tapapantalla">

                  <div id="tapascreen">
                    {pokemons.map((item, i) => <div class="itemspantalla btn" onClick={() => { setIndex(i) }} key={i}>  {i + 1}. {item.name}   </div>)}

                  </div>

                  <div className="btn-group btn-group-toggle" >
                    <label className="btn btn-info botonescelestes ">
                      <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />
                    </label>
                    <label className="btn btn-info botonescelestes">
                      <input type="radio" name="options" id="option2" autoComplete="off" />
                    </label>
                    <label className="btn btn-info botonescelestes">
                      <input type="radio" name="options" id="option3" autoComplete="off" />
                    </label>
                    <label className="btn btn-info botonescelestes">
                      <input type="radio" name="options" id="option4" autoComplete="off" />
                    </label>
                    <label className="btn btn-info botonescelestes">
                      <input type="radio" name="options" id="option5" autoComplete="off" />
                    </label>
                  </div>

                  <div id="botonesblancosyamarillo">
                    <div className="btn-group btn-group-toggle" >

                      <label className="btn btn-light botonesblancos">
                        <input type="radio" name="options" id="option6" autoComplete="off" defaultChecked /></label>
                      <label className="btn btn-light botonesblancos">
                        <input type="radio" name="options" id="option7" autoComplete="off" /></label>
                    </div>
                    <button type="button" class="btn btn-warning botonamarillo" >


                    </button>
                  </div>

                </div>
                : <div></div>}

            </div>
          </div>


          {/* FILA-3 */}
          <div className="container">
            <div className="row">

              <div className="col-2"></div>

              {/* FILA-3-zona botones */}
              {value2 ?
                <div className="col-2 rojo3  pb-3 " id="filabotones">
                  {/* botones */}
                  <div className="d-flex justify-content-around align-items-center  d-flex justify-content-between ">
                    <button class="rounded-circle" id="botongrande" ></button>
                    <button class="rounded-pill" id="botonchico1"></button>
                    <button class="rounded-pill" id="botonchico2"></button>
                  </div>
                  {/* visor verde */}
                  <div className="d-flex justify-content-around align-items-center  d-flex justify-content-between mt-3">
                    <div id="pantallaverde">
                      {index > -1 ? <div>{pokemons[index].name}</div> : <div></div>}
                    </div>
                  </div>
                </div>
                : <div className="col-2 rojo2  pb-3 " id="filabotones"></div>
              }
              {/* d-pad */}
              {value2 ?
                <div className="col-2 rojo3 px-0 pt-2">
                  <div id="pad ">

                    <div className="container ">

                      <div className="row">
                        <div className="col-5 padspace"></div>
                        <div className="col-2 btn btn-dark" id="upbutton" ></div>
                        <div className="col-5 padspace"></div>
                      </div>

                      <div className="row">
                        <div className="col-3 padspace"></div>
                        <div className="col-2 btn btn-dark" id="leftbutton" onClick={() => { setIndex(index - 1) }}></div>
                        <div className="col-2"></div>
                        <div className="col-2 btn btn-dark" id="rightbutton" onClick={() => { setIndex(index + 1) }}></div>
                        <div className="col-3 padspace"></div>
                      </div>

                      <div className="row">
                        <div className="col-5 padspace"></div>
                        <div className="col-2 btn btn-dark" id="downbutton"></div>
                        <div className="col-5 padspace"></div>

                      </div>
                    </div>
                  </div></div>
                : <div className="col-2 rojo2 ">

                </div>}

              {/* FILA-3visagra */}
              <div className="col-1 rojo2 border-left border-right border-dark" >

                {/* FILA-3tapa */}
              </div>
              {value2 ? <div className="col-4 rojo  d-flex justify-content-around align-items-around">
                <button class="btn btn-dark pardebotonesnegros"></button>
                <button class="btn btn-dark pardebotonesnegros"></button>
              </div>
                : <div></div>}

            </div>
          </div>



          {/* FILA-4 */}
          <div className="container">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-4 rojo2 border-top border-right border-dark" id="filabaja" ></div>
              <div className="col-1 rojo2 border-left border-right border-dark" id="visagra-buttom"></div>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default Home