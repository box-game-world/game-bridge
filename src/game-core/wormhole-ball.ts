
import { Vertex, Vector } from './interfaces'
import PhysicalBody from './physical-body'
import { World, Bodies, Body} from 'matter-js'

export default class WormholeBall extends PhysicalBody{

  private _vector:Vector;

  constructor( world:World ){
    super( world, { bodyOptions:{ isSensor:true, mass:1500 }} );
  }

  protected _initialzed():void{
    super._initialzed();
    this._body.label = 'wormhole_ball';
  }

  protected _generatorVertices():Vertex[]{
    return Bodies.circle( 0, 0, 5 ).vertices;
  }

  public setVector( vector:Vector ):void{
    this._vector = vector;
    const targetX:number = Math.cos( vector.radian ) * vector.length;
    const targetY:number = Math.sin( vector.radian ) * vector.length;
    console.log(this.x,this.y,targetX,targetY );
    Body.applyForce( this._body, { x:this.x, y:this.y }, { x:targetX, y:targetY} );
  }

  public getVector():Vector{
    return this._vector;
  }
}
