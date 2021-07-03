import {useState, Component} from "react";

class App extends Component{
  
  constructor(props){
    super(props);
    console.log("Aquí entra constructor")
    this.state = {
      name: "",
    };
  }

  componentDidMount(){
    console.log("Aquí entra DidMount");
  }

  componentDidUpdate(){
    console.log("Aquí entra DidUpdate");
  }

  // mostrar hasta aquí para enfatizar que DidUpdate no se ve en console porque no
  // hay alguna actualización de estado, es decir, hata aquí el html sin el input, añadir después de mostrar
  // y también añadir hasta entonces la definición del state línea 8 dentro de constructor()

  shouldComponentUpdate(){
    return true;
  }

  // después de añadir el shouldComponent, mostrar cómo en false evita que venga un DidUpdate

  // mostrar como con Snapshot capturamos en consola el estado previo de lo escrito en el input

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(prevProps, prevState);
  }

  render(){
    return(
      <div>
        <h1>
          Hola
        </h1>
        <input value={this.state.name} onChange={({target : {value}}) => this.setState({name : value})}></input>
      </div>
    );
  }

}

export default App;
