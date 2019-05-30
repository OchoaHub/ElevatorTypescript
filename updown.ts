class Elevador
{
  private pisosTotales : number;
  private pisoActual : number;
  private estadoPuerta : number;
    constructor(paraPT : number)
    {
      this.pisosTotales = paraPT; //paraPT es el parametro de los pisos totales
      this.pisoActual = 1;
      this.estadoPuerta = 0;
    }
    public getPisosTotales() : number
    {
      return this.pisosTotales;
    }
    public getPisoActual() : number
    {
      return this.pisoActual;
    }
    public getEstadoPuerta() : number
    {
      return this.estadoPuerta;
    }

    public abrirPuerta() : number
    {
      if(this.getEstadoPuerta() == 0)
      {
          return this.estadoPuerta = 1;
      }
    }

    public cerrarPuerta() : number
    {
      if(this.getEstadoPuerta() == 1)
      {
          return this.estadoPuerta = 0;
      }
    }

    private subir()
    {
      this.pisoActual++;
        console.log('Subiendo...');
    }

    private bajar()
    {
      this.pisoActual--;
        console.log('Bajando...');
    }


    public irPiso(pisoDestino : number)
    {
      if(pisoDestino >= 1 && pisoDestino <= 5 && this.getEstadoPuerta() == 0)
      {
        if(pisoDestino > this.getPisoActual())
        {
          while(this.getPisoActual() < pisoDestino)
          {
            this.subir();
          }
        }
        else if(pisoDestino < this.getPisoActual())
        {
          while(this.getPisoActual() > pisoDestino)
          {
            this.bajar();
          }
        }
      }
    }


}

let ele1 = new Elevador(5)
console.log(ele1.irPiso(3));
console.log(ele1.irPiso(1));
console.log(ele1.getPisoActual());
